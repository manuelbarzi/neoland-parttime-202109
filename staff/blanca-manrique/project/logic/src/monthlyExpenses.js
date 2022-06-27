const { models: { User, Order }, mongoose: { Types: { ObjectId } } } = require('data')
const {
    validators: { validateId, validateNumber },
    errors: { NotFoundError }
} = require('commons')


function monthlyExpenses(userId, year) {
    validateId(userId, 'user id')
    validateNumber(year, 'year')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Order.aggregate(
                [
                    {
                        $project: {
                            year: { $year: "$createdAt" },
                            month: { $month: "$createdAt" },
                            _id: 1,
                            user: 1,
                            items: 1,
                            status: 1
                        }
                    },
                    {
                        $match: {
                            user: ObjectId(userId),
                            year,
                            $or:[{status: 'in progress'}, {status: 'completed'}]
                        }
                    }
                ]
            )
        })
        .then(orders => {

            const expenses = orders.reduce((expenses, order) => {
                const { month, items } = order

                const amount = items.reduce((amount, item) => amount + item.price * item.quantity, 0)

                const index = month - 1

                expenses[index] += amount

                return expenses
            }, new Array(12).fill(0))

            return expenses
        })
}

module.exports = monthlyExpenses