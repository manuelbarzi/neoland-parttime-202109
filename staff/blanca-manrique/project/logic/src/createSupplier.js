const { models: { User, Supplier } } = require('data')
const {
    validators: { validateId, validateString, validateEmail, validateBoolean },
    errors: { NotFoundError, DuplicityError }
} = require('commons')

function createSupplier(userId, name, email, web, phone, adress, contactPerson, tradeAssurance) {
    validateId(userId, 'user id')
    validateEmail(email)
    validateString(name, 'supplier name')
    validateString(web, 'supplier web')
    validateString(phone, 'supplier phone')
    validateString(adress, 'supplier adress')
    validateString(contactPerson, 'supplier contact person')
    validateBoolean(tradeAssurance, 'trade assurance')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Supplier.create({ user: userId, name, email, web, phone, adress, contactPerson, tradeAssurance })
        })
        .then(supplier => { })
        .catch(error => {
            if (error.message.includes('duplicate')) //si el error contiene "duplicate" lanzo este error custom
                throw new DuplicityError('supplier already exists')

            throw error //si el error NO contiene "duplicate", lanzo el error propio de Mongodb
        })
}

module.exports = createSupplier