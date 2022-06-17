const { models: { User, Supplier, Product } } = require('data')
const {
    validators: { validateId, validateString, validateNumber },
    errors: { NotFoundError, AuthError, DuplicityError }
} = require('commons')

function updateProduct(userId, supplierId, productId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateString(supplierProductId, 'supplier product id') 
    validateString(supplierProductUrl, 'supplier productId URL')
    validateString(name, 'product name')
    validateString(category, 'product category')
    validateString(brand, 'product brand')
    validateString(model, 'product model')
    validateString(material, 'product material')
    validateNumber(price, 'purchase price')
    validateNumber(salePrice, 'sale price')

    return Promise.all([User.findById(userId), Supplier.findById(supplierId), Product.findById(productId)])
        .then(([user, supplier, product]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)

            if (supplier.user.toString() !== userId) throw new AuthError(`product with id ${productId} does not belong to user with id ${userId}`)
            if (product.supplier.toString() !== supplierId) throw new AuthError(`product with id ${productId} does not belong to supplier with id ${supplierId}`)
            // return product.updateOne({ supplier: supplierId, _id: productId }, { supplierProductUrl, name, category, brand, model, material, price, salePrice })
    
            //Como ya tengo el product, actualizo sus campos:
            product.supplierProductId = supplierProductId 
            product.supplierProductUrl = supplierProductUrl
            product.name = name
            product.category = category
            product.brand = brand
            product.model = model
            product.material = material
            product.price = price
            product.salePrice = salePrice
    
            return product.save()
            
        })
        .then(product => {})
        .catch(error =>{
            if(error.message.includes('dup'))
                throw new DuplicityError(`already exists a product with the same reference from supplier with id ${supplierProductId}`)
            
            throw error
        })
}
module.exports = updateProduct