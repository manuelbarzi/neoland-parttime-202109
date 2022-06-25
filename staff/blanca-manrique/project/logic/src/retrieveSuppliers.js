const { models: { User, Supplier } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError }
} = require('commons')


function retrieveSuppliers(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError("user does not exist")

            return Supplier.find({ user: userId }).lean()
        })
        .then(suppliers => {
            if (suppliers.length === 0) throw new NotFoundError(`not found any supplier`)
            
            //Limpiamos los proveedores (sanitize)
            suppliers.forEach(supplier => {
                supplier.id = supplier._id.toString()

                delete supplier._id
                delete supplier.__v
            })

            return suppliers
        })

}

module.exports = retrieveSuppliers