const { users } = require('../managers')
const { validateUsername, validateEmail, validatePassword } = require('../managers/helpers/validators')
const { User } = require('../models')

function registerUser(username, email, password) {
    validateUsername(username)
    validateEmail(email)
    validatePassword(password)

    return users.findByEmail(email)
        .then(user => {
            if (user) throw new Error('user already exists')

            user = new User(`USER-${Date.now()}`, name, email, password)

            return users.save(user)
        })
}

module.exports = registerUser