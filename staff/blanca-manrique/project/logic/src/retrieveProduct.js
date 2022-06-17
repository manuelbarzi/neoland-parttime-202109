const { models: { User, Supplier, Product } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function retrieveProduct(userId, supplierId, productId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')

    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).lean(), Product.findById(productId).lean()])
        .then(([user, supplier, product]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)

            if (supplier.user.toString() !== userId) throw new AuthError(`product with id ${productId} does not belong to user with id ${userId}`)
            if (product.supplier.toString() !== supplierId) throw new AuthError(`product with id ${productId} does not belong to supplier with id ${supplierId}`)
            //Limpiamos el producto antes de devolverlo
            product.id = product._id.toString()

            delete product._id
            delete product.__v

            return product
        })

}

module.exports = retrieveProduct