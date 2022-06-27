const { models: { User, Supplier, Product, Variant } } = require('data')
const {
    validators: { validateId, validateString, validateNumber },
    errors: { NotFoundError, DuplicityError, AuthError }
} = require('commons')


function createVariant(userId, supplierId, productId, size, color, stockOnHand, criticalStock) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateString(size, 'product size')
    validateString(color, 'product color')
    validateNumber(stockOnHand, 'variant stock on hand')
    validateNumber(criticalStock, 'variant critical stock')


    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).populate('user').lean(), Product.findById(productId).lean()])
        .then(([user, supplier, product]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            if (!product) throw new NotFoundError(`product with id ${supplierId} not found`)
            if (supplier.user._id.toString() !== userId) throw new AuthError(`supplier with id ${supplierId} does not belong to user with id ${userId}`)
            if (product.supplier.toString() !== supplierId) throw new AuthError(`product with id ${productId} does not belong to supplier with id ${supplierId}`)

            return Variant.findOne({ supplier: supplierId, product: productId, size, color })
                .then(variant => {
                    if (variant) throw new DuplicityError(`variant with supplier id ${supplierId}, product id ${productId}, size ${size}, and color ${color}, already exists`)
                    
                    return Variant.create({ supplier: supplierId, product: productId, size, color, stockOnHand, criticalStock })
                })
        })
        .then(variant => { })
}

module.exports = createVariant