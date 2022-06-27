const { models: { User, Order } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function deleteOrder(userId, orderId) {
    validateId(userId, 'user id')
    validateId(orderId, 'order id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Order.findById(orderId)
        })
        .then(order => {
            if (!order) throw new NotFoundError(`order with id ${orderId} not found`)
            if (order.user.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to retrieve order with id ${orderId}`)

            return Order.deleteOne({ _id: orderId })
        })
        .then(result => { })
}
module.exports = deleteOrder