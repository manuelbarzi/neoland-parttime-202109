const { models: { User } } = require('../../data')
const { validators: { validateEmail, validatePassword } } = require('../../commons')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email, password })
        .then(user => {
            if (!user) throw new Error('datos incorrectos')

            return user.id
        })


}

module.exports = authenticateUser
