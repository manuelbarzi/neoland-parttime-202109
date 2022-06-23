const { models: { User, Order } } = require('data')
const {
    validators: { validateId, validateString },
    errors: { NotFoundError }
} = require('commons')

function createOrder(userId, status, description) {
    validateId(userId, 'user id')
    validateString(status, 'order status')
    description?  validateString(description, 'description') :null

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Order.create({user: userId, status: 'draft', description})
        })
        .then(order => { })
}

module.exports = createOrder