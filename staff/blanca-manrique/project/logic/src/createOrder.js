const { models: { User, Order } } = require('data')
const {
    validators: { validateId, validateString },
    errors: { NotFoundError }
} = require('commons')

function createOrder(userId, status) {
    validateId(userId, 'user id')
    validateString(status, 'order status')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            

            return Order.create({user: userId, status: 'draft'})
        })
        .then(order => { })

}

module.exports = createOrder