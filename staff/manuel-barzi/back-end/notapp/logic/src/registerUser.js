const { models: { User } } = require('data')
const {
    validators: {
        validateName,
        validateEmail,
        validatePassword
    },
    errors: {
        DuplicityError
    }
} = require('commons')
const bcrypt = require('bcryptjs')


function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return bcrypt.hash(password, 10)
        .then(hash => User.create({ name, email, password: hash }))
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError('user already exists')

            throw error
        })
}

module.exports = registerUser