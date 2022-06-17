const { models: { User, Supplier, Product, Variant } } = require('data')
const {
    validators: { validateId, validateString, validateNumber },
    errors: { NotFoundError, AuthError, DuplicityError }
} = require('commons')

function updateVariant(userId, supplierId, productId, variantId, size, color, stockOnHand, criticalStock) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateId(variantId, 'variant id')
    validateString(size, 'product size')
    validateString(color, 'product color')
    validateNumber(stockOnHand, 'variant stock on hand')
    validateNumber(criticalStock, 'variant critical stock')

    return Promise.all([User.findById(userId), Supplier.findById(supplierId), Product.findById(productId), Variant.findById(variantId)])
        .then(([user, supplier, product, variant]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)
            if (!variant) throw new NotFoundError(`variant with id ${variantId} not found`)

            if (supplier.user._id.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to access information from other products`)
            if (product.supplier._id.toString() !== supplierId) throw new AuthError(`product with id ${productId} does not belong to supplier with id ${supplierId}`)
            if (variant.product.toString() !== productId) throw new AuthError(`variant with id ${variantId} does not belong to product with id ${productId}`)
            // return variant.updateOne({ product: productId, _id: variantId }, { variantId, size, color, stockOnHand, criticalStock })

            //no puedo actualizar una variante si esa variante va a ser un duplicado de otra variable ya existente: si actualizo no puede coincidir en supplier.ir, product.id, size y color con otra variante ya creada
            return Variant.findOne({ supplier: supplierId, product: productId, size, color, stockOnHand, criticalStock })
                .then(variant => {
                    if (variant) throw new DuplicityError(`variant with supplier id ${supplierId}, product id ${productId}, size ${size}, and color ${color}, already exists`)
                    
                    //Si ya he comprobado que no hay en base de datos ninguna variante con los datos que yo le quiero pasar para actualizar, entonces que me deje actualizar. Esto sucede porque no tenemos ningún elemento UNIQUE en el schema
                    return Variant.updateOne({ product: productId, _id: variantId }, { variantId, size, color, stockOnHand, criticalStock })
                        .then(result => {
                            const { matchedCount } = result

                            if (matchedCount === 0)
                                throw new Error(`variant with id ${variantId} not found`)
                        })

                })
        })
}
module.exports = updateVariant