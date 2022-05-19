const { models: { User, Company } } = require('data')
const bcrypt = require('bcryptjs')
const { errors: { DuplicityError, NotFoundError }, validators: { validateString, validateEmail, validatePassword, validateId } } = require('commons')


function createUser(companyId, name, email, password, role = 'driver') {
    validateId(companyId, 'company id')
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)
    validateString(role, 'role')

    return Company.findById(companyId)
        .then(company => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)

            return bcrypt.hash(password, 10)
                .then(hash => User.create({ company: companyId, name, email, password: hash, role }))
                .then(driver => { })
                .catch(error => {
                    if (error.message.includes('duplicate'))
                        throw new DuplicityError('company already exist')

                    throw error
                })
        })
}

module.exports = createUser