const { models: { User, Order } } = require('data')
const {
    validators: { validateId, validateString },
    errors: { NotFoundError, AuthError }
} = require('commons')

function generateOrder(userId, orderId, status) {
    validateId(userId, 'user id')
    validateId(orderId, 'order id')
    validateString(status, 'order status')

    return Promise.all([User.findById(userId), Order.findById(orderId)])
        .then(([user, order]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!order) throw new NotFoundError(`order with id ${orderId} not found`)
            if (order.user._id.toString() !== userId) throw new AuthError(`order with id ${orderId} does not belong to user with id ${userId}`)

            // order.status = status

            // return order.save()

            return Order.updateOne({ _id: orderId }, { status: 'in progress' })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new Error(`order with id ${orderId} not found`)
                })
        })
        .then(order => { })

}

module.exports = generateOrder