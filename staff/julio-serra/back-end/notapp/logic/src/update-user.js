const { models: { User } } = require('../../data')
const { validateName, validateEmail, validatePassword } = require('./helpers/validators')


function updateUser(id, name, email, password) {
    validateName.name,
        validateEmail.email,
        validatePassword.password
    return User.updateOne({ _id: id }, { name, email, password })

}

module.exports = updateUser