const { models: { User, Item, Order } } = require('data')
const {
    validators: { validateId, validateString, validateNumber },
    errors: { NotFoundError, AuthError, DuplicityError }
} = require('commons')


function addItemToOrder(userId, orderId, variant, price, quantity) {
    validateId(userId, 'user id')
    validateId(orderId, 'order id')
    validateString(variant, 'variant')
    validateNumber(price, 'price')
    validateNumber(quantity, 'quantity')

    return Promise.all([User.findById(userId), Order.findById(orderId)])
        .then(([user, order]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!order) throw new NotFoundError(`order with id ${orderId} not found`)
            if (order.user.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to retrieve order with id ${orderId}`)

            //si de todos los items que tengo en la orden hay alguno que tiene item.variant === que la variant que estoy pasando ahora que me salga un error de que esa variante YA ESTÁ añadida en la orden de compra... que no haya variantes repetidas en una order
            order.items.forEach(_item => {
                if (_item.variant._id.toString() === variant) throw new DuplicityError(`variant with id ${variant} already added to order with id ${orderId}`)
            })

            const item = new Item({ user: userId, variant: variant, price, quantity })

            order.items.push(item)

            return order.save()

        })
        .then(order => { })
}

module.exports = addItemToOrder