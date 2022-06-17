const { models: { User, Supplier, Product, Variant } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function retrieveVariant(userId, supplierId, productId, variantId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateId(variantId, 'variant id')

    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).lean(), Product.findById(productId).lean(), Variant.findById(variantId).lean().populate('product')])
        .then(([user, supplier, product, variant]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)
            if (!variant) throw new NotFoundError(`variant with id ${variantId} not found`)

            if (supplier.user._id.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to access information from other products`)
            if (product.supplier._id.toString() !== supplierId) throw new AuthError(`product with id ${productId} does not belong to supplier with id ${supplierId}`)
            if (variant.product._id.toString() !== productId) throw new AuthError(`variant with id ${variantId} does not belong to product with id ${productId}`)
            
            //Limpiamos la variante antes de devolverla
            variant.id = variant._id.toString()

            delete variant._id
            delete variant.__v

            //Nos traemos todos los datos del producto gracias al .populate()
            //queremos que la variante tenga X nuevas propiedades, así vamos a poder eliminar variant.product entero

            variant.productId = variant.product._id.toString()
            variant.supplierId = variant.product.supplier.toString()
            variant.productIdFromSupplier = variant.product.supplierProductId
            variant.productUrl = variant.product.supplierProductUrl
            variant.productName = variant.product.name
            variant.productCategory = variant.product.category
            variant.productBrand = variant.product.brand
            variant.productModel = variant.product.model
            variant.productMaterial = variant.product.material
            variant.productPrice = variant.product.price
            variant.productSalePrice = variant.product.salePrice

            delete variant.product

            return variant
        })
}

module.exports = retrieveVariant