const { models: { User, Supplier, Product, Variant } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError, ConflictError }
} = require('commons')

function retrieveAllVariantsFromProduct(userId, supplierId, productId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')

    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).lean(), Product.findById(productId).lean()])
        .then(([user, supplier, product]) => {
            if (!user) throw new NotFoundError("user does not exist")
            if (!supplier) throw new NotFoundError("supplier does not exist")
            if (!product) throw new NotFoundError("product does not exist")
            if (supplier.user._id.toString() !== userId) throw new AuthError(`user is not authorised to retrieve variants from other user`)
            if (product.supplier._id.toString() !== supplierId) throw new AuthError(`product with id ${productId} do not belong to supplier with id ${supplierId}`)

            return Variant.find({ user: userId, supplier: supplierId, product: productId }).lean().populate('product')
        })
        .then(variants => {
            // if (variants.length === 0) throw new NotFoundError(`product with id ${productId} has no assigned variants`)

            for (let i = 0; i < variants.length - 1; i++)
                if (variants[i].product !== variants[i + 1].product)
                    throw new ConflictError(`variants do not belong to the same product`)

            variants.forEach(variant => {
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
            })
            return variants
        })

}

module.exports = retrieveAllVariantsFromProduct