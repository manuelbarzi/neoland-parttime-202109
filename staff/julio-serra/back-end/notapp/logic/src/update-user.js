const { models: { User } } = require('../../data')
const { validateName, validateEmail, validatePassword } = require('./helpers/validators')


function updateUser(id, updatedUser) {
    validateName.name,
        validateEmail.email,
        validatePassword.password
    return User.updateOne({ _id: id }, updatedUser)

}

module.exports = updateUser