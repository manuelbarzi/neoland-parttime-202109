const { validateEmail, validatePassword } = require('../helpers/validators')
const { User } = require('../models')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findByEmail(email)
        .then(user => {
            if (!user) throw new Error('user does not exist')

            if (user._doc.password !== password) throw new Error('password is incorrect')

            return user._doc.id
        })
}

module.exports = authenticateUser