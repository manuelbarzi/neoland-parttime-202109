const { models: { User, Order, Item, Variant } } = require('data')
const {
    validators: { validateId, validateString, validateNumber, validateArray },
    errors: { NotFoundError, AuthError, ConflictError }
} = require('commons')

/**
 * Creates an order
 * 
 * @param {string} userId User id
 * @param {number} total Total price (net worth)
 * @param {array} items The ordered product items ([{ variant, price, quantity }, ...])
 * @returns 
 */
function createOrder(userId, total, items) {
    validateId(userId, 'user id')
    validateNumber(total, 'order total')
    validateArray(items, 'items')

    if (items.length < 1) throw new AuthError(`order has no items`)

    items.forEach(({ variant, price, quantity }) => {
        validateString(variant, 'variant id')
        validateNumber(price, 'price')
        validateNumber(quantity, 'quantity')
    })

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const variantIds = items.map(item => item.variant)

            return Variant.find({ _id: { $in: variantIds } })
        })
        .then(variants => {
            if (variants.length !== items.length) 
                throw new ConflictError(`variants length does not match items length`)

            for (let i = 0; i < variants.length - 1; i++)
                if (variants[i].product.supplier !== variants[i + 1].product.supplier)
                    throw new ConflictError(`variant products do not belong to the same supplier`)

            const _items = items.map(item => new Item(item))

            return Order.create({ user: userId, status: 'in progress', total, items: _items })
        })
        .then(order => { })

}

module.exports = createOrder