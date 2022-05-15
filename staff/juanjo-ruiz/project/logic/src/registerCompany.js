const { models: { Company } } = require('data')
const bcrypt = require('bcryptjs')
const { errors: { DuplicityError }, validators: { validateString, validateEmail, validatePassword, validateCif } } = require('commons')


function registerCompany(businessName, cif, name, email, password, role = 'admin') {
    validateString(businessName, 'business name')
    validateCif(cif)
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)
    validateString(role, 'role')

    return bcrypt.hash(password, 10)
        .then(hash => Company.create({ businessName, cif, name, email, password: hash, role }))
        .then(company => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError('company already exist')

            throw error
        })
}

module.exports = registerCompany