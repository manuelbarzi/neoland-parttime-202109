const { models: { User } } = require('../../data')
const { validateEmail, validatePassword } = require('./helpers/validators')

function authenticateUser(email, password) {
    validateEmail.email,
        validatePassword.password

    return User.findOne({ email, password })
    .then(user => {
        if (!user) throw new Error('datos incorrectos')

        return user.id
    })


}

module.exports = authenticateUser
