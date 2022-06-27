const { models: { User, Supplier, Product } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError, ConflictError }
} = require('commons')

function retrieveAllProductsFromSupplier(userId, supplierId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')

    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).lean()])
        .then(([user, supplier]) => {
            if (!user) throw new NotFoundError("user does not exist")
            if (!supplier) throw new NotFoundError("supplier does not exist")
            if (supplier.user.toString() !== userId) throw new AuthError("user is not authorised to retrieve products from other user")

            return Product.find({ user: userId, supplier: supplierId }).lean().populate('supplier')
        })
        .then(products => {
            // if (products.length === 0) throw new NotFoundError(`supplier with id ${supplierId} has no assigned products`)

            for (let i = 0; i < products.length - 1; i++)
                if (products[i].supplier !== products[i + 1].supplier)
                    throw new ConflictError(` products do not belong to the same supplier`)

            products.forEach(product => {

                //Limpiamos los productos (sanitize)
                product.id = product._id.toString()
                product.supplierId = product.supplier._id.toString()
                product.supplierName = product.supplier.name

                delete product._id
                delete product.__v
                delete product.supplier

            })
            return products
        })
}

module.exports = retrieveAllProductsFromSupplier