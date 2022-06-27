const { models: { User, Supplier } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function retrieveSupplier(userId, supplierId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')

    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).lean()])
        .then(([user, supplier]) => {
            if (!user) throw new NotFoundError("user does not exist")
            if (!supplier) throw new NotFoundError("supplier does not exist")

            if(supplier.user.toString() !== userId) throw new AuthError(`supplier with id ${supplierId} does not belong to user with id ${userId}`)

            //Limpiamos el proveedor antes de devolverlo
            supplier.id = supplier._id.toString()

            delete supplier._id
            delete supplier.__v

            return supplier
        })
}

module.exports = retrieveSupplier