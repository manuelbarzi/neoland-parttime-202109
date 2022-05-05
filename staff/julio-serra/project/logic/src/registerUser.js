const {
    validators:
    { validateName, validateEmail, validatePassword },
    errors:
    { DuplicityError }
} = require('commons')

const { models: { User } } = require('data')
const bcrypt = require('bcryptjs')

function registerUser(name, email, password, image) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    // return User.create({ name, email, password, image })
    return bcrypt.hash(password, 10)
        .then(hash => User.create({ name, email, password: hash, image }))
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError('user already exists')

            throw error
        })

}

module.exports = registerUser