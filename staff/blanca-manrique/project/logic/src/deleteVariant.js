const { models: { User, Supplier, Product, Variant } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function deleteVariant(userId, supplierId, productId, variantId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateId(variantId, 'variant id')

    return Promise.all([User.findById(userId), Supplier.findById(supplierId), Product.findById(productId), Variant.findById(variantId)])
        .then(([user, supplier, product, variant]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)
            if (!variant) throw new NotFoundError(`variant with id ${variantId} not found`)

            if (supplier.user._id.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to access information from other products`)
            if (product.supplier._id.toString() !== supplierId) throw new AuthError(`product with id ${productId} does not belong to supplier with id ${supplierId}`)
            if (variant.product.toString() !== productId) throw new AuthError(`variant with id ${variantId} does not belong to product with id ${productId}`)

            return Variant.deleteOne({ _id: variantId })
        })
}

module.exports = deleteVariant