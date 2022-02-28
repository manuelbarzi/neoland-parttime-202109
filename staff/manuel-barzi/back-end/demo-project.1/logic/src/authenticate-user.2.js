const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require('data')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = User.findByEmail(email)

    if (!user) throw new Error('user does not exist')

    if (user._doc.password !== password) throw new Error('password is incorrect')

    return user._doc.id
}

module.exports = authenticateUser