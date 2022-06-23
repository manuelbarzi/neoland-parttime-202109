const { models: { User, Order } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError }
} = require('commons')


function monthlyExpenses(userId) {
    validateId(userId, 'user id')

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
                            items: 1
                        }
                    },
                    { $match: { month: 6 } }
                ]
            )
        })
        .then(orders => {
            if (orders.length === 0) throw new NotFoundError(`user with id ${userId} has no created orders`)

            orders.forEach(order => {
                order.id = order._id.toString()
                delete order._id
                delete order.__v

                order.items.forEach(item => {
                    item.id = item._id.toString()
                    delete item._id

                    delete item.variant
                })

            })

            return orders
        })
}

module.exports = monthlyExpenses