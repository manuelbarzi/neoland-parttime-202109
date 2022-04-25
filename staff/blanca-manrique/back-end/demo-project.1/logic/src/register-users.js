const { User } = require('data')
const { validateName, validateEmail, validatePassword } = require('./helpers/validators')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    let user = User.findByEmail(email) //SÍNCRONO -> busca en cache

    if (user) {
        throw new Error('user already exists')
    }
    user = new User({ id: `USER-${Date.now()}`, name, email, password })

    return user.save() //devuelve una promesa

}

module.exports = registerUser
