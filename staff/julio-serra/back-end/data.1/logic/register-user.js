const { users } = require('../managers')
const { validateName, validateEmail, validatePassword } = require('../helpers/validators')
const { User } = require('../models')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return users.findByEmail(email) // si existe un usuario con ese email

        .then(user => {
            if (user) throw new Error('Usuario ya existe')
            
            const newUser = new User(`USER-${Date.now()}`, name, email, password)
            return users.save(newUser)

        })

}

module.exports = registerUser
