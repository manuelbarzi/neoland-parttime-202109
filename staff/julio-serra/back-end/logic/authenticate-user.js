const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require('data')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findByEmail(email)
        .then(user => {
            if (!user) throw new Error('El usuario no existe')
            
            if (user._doc.password !== password) throw new Error('Password incorrecto')

            return user._doc.id
        })

}

module.exports = authenticateUser