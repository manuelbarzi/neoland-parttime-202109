const { models: { User } } = require('data')
const { validators: { validateName, validateEmail, validatePassword } } = require('commons')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    /*
    const user = new User({ name, email, password })

    return user.save()
        .then(user => { })
    */

    return User.create({ name, email, password })
        .then(user => { })
}

module.exports = registerUser