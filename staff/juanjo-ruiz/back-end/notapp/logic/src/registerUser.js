const { models: { User } } = require('data')
const { validators: { validateName, validateEmail, validatePassword } } = require('commons')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password })
        .then(user => { })

}

module.exports = registerUser