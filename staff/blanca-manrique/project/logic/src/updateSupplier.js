const { models: { User, Supplier } } = require('data')
const {
    validators: { validateId, validateEmail, validateString, validateBoolean },
    errors: { NotFoundError, AuthError, DuplicityError }
} = require('commons')

function updateSupplier(userId, supplierId, name, email, web, phone, adress, contactPerson, tradeAssurance) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')
    validateString(name, 'supplier name')
    validateEmail(email)
    validateString(web, 'supplier web')
    validateString(phone, 'supplier phone')
    validateString(adress, 'supplier adress')
    validateString(contactPerson, 'supplier contact person')
    validateBoolean(tradeAssurance, 'trade assurance')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Supplier.findById(supplierId)
        })
        .then(supplier => {
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)

            if (supplier.user.toString() !== userId) throw new AuthError(`supplier with id ${supplierId} does not belong to user with id ${userId}`)

            // return supplier.updateOne({ user: userId, _id: supplierId }, { name, email, web, phone, adress, contactPerson, tradeAssurance })

            //Como ya tengo el supplier, actualizo sus campos:
            supplier.name = name
            supplier.email = email
            supplier.web = web
            supplier.phone = phone
            supplier.adress = adress
            supplier.contactPerson = contactPerson
            supplier.tradeAssurance = tradeAssurance

            return supplier.save()
        })
        .catch(error => {
            if (error.message.includes('dup key: { ')) //si el error contiene "dup key: { name", "dup key: { phone", "dup key: { email" lanzo este error custom
                throw new DuplicityError('supplier with same credentials already exists')

            throw error //si el error NO contiene "duplicate", lanzo el error propio de Mongodb
        })
}
module.exports = updateSupplier