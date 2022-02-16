const User = require('data')
const { validateName, validateEmail, validatePassword } = require('./helpers/validators')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.findByEmail(email) // si existe un usuario con ese email

        .then(user => {
            if (user) throw new Error('Usuario ya existe')
            
            user = new User({ id: `USER-${Date.now()}`, name, email, password })
            return user.save()

        })

}

module.exports = registerUser 