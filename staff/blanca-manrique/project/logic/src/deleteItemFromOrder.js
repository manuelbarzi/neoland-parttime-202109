const { models: { User, Order } } = require('data')
const { 
    validators: { validateId }, 
    errors: { NotFoundError, AuthError } 
} = require('commons')

function deleteItemFromOrder(userId, orderId, itemId) {
    validateId(userId, 'user id')
    validateId(orderId, 'order id')
    validateId(itemId, 'item id')

    return Promise.all([User.findById(userId), Order.findById(orderId)])
        .then(([user, order]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!order) throw new NotFoundError(`order with id ${orderId} not found`)
            if (order.user.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to retrieve order with id ${orderId}`)
            
            const { items } = order

            const itemIndex = items.findIndex(item => item.id === itemId)

            if (itemIndex < 0)
                throw new NotFoundError(`order with id ${orderId} not found`)
            
            items.splice(itemIndex, 1)
            
            return order.save()
        })
        .then(() => { })
}

module.exports = deleteItemFromOrder