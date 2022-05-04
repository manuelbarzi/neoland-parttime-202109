const { validateName, validateEmail, validatePassword } = require('../../commons')
const { DuplicityError } = require('../../commons/src/errors')
const { models: { User } } = require('data')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password })
    .then(user => {})
    // .catch(error => {
    //     if(error.message.includes('duplicate'))
    //     throw new DuplicityError('user already exists')

    //     throw error
    // })

}

module.exports = registerUser