const { models: { User } } = require('../../data')
const { validateName, validateEmail, validatePassword } = require('./helpers/validators')

function registerUser(name, email, password) {
    validateName.name,
        validateEmail.email,
        validatePassword.password

    const user = new User({ name, email, password })

    return user.save()
}

module.exports = registerUser