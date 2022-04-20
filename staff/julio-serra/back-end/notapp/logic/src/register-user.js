const { models: { User } } = require('../../data')
const {
    errors: {
        DuplicityError },
    validators: {
        validateName,
        validateEmail,
        validatePassword
    } } = require('../../commons')

const bcrypt = require('bcryptjs')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return bcrypt.hash(password, 10)
        .then(hash => User.create({ name, email, password: hash }))
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate')) // si el error contiene la palabra "duplicate" que lance el siguiente error
                throw new DuplicityError('user already exists')

            throw Error
        })
}

module.exports = registerUser