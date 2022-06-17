const { models: { User, Supplier, Product } } = require('data')
const {
    validators: { validateId, validateString, validateNumber },
    errors: { NotFoundError, DuplicityError }
} = require('commons')

function createProduct(userId, supplierId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateString(supplierProductId, 'supplier productId name')
    validateString(name, 'product name')
    validateString(category, 'product categorý')
    validateString(brand, 'product brand')
    validateString(model, 'product model')
    validateString(material, 'product material')
    validateNumber(price, 'purchase price')
    validateNumber(salePrice, 'sale price')


    return Promise.all([User.findById(userId), Supplier.findById(supplierId)])
        .then(([user, supplier]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)

            return Product.create({ supplier: supplierId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice })
        })
        .then(product => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError(`product with reference ${supplierProductId} already exists`)

            throw error
        })
}

module.exports = createProduct