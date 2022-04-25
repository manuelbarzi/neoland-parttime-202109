const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require('../../data.3/src')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = User.findByEmail(email)

    if (!user) throw new Error('user does not exist')

    if (user.password !== password) throw new Error('password is incorrect') //con set-get ya no tenemos que acceder a user._doc.password --> directamente user.password

    return user.id //con set-get ya no tenemos que acceder a user._doc.id --> directamente user.id
    //todo está en cache -> no trabajamos con promesas
}

module.exports = authenticateUser