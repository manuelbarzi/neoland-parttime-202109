
const { models: { User } } = require('data')
const { validators: { validateName, validateEmail, validatePassword },
    errors: { DuplicityError } } = require('commons')
const bcrypt = require('bcryptjs')

function registerNutritionist(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return bcrypt.hash(password, 10)
        .then(hash => User.create({ name, email, password: hash, role: User.NUTRITIONIST }))
        .then(nutritionist => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError(`nutritionist with email ${email} already exists`)

            throw error
        })
}

module.exports = registerNutritionist