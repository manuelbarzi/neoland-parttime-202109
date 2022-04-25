const { User } = require('../models')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.findByEmail(email)
        .then(user => {
            if (user) {
                throw new Error('user already exists')
            }
            user = new User({ id: `USER-${Date.now()}`, name, email, password })

            return user.save()
        })
}

module.exports = registerUser
