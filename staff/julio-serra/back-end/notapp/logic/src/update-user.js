const { models: { User } } = require('../../data')
const { validators: { validateId, validateName, validateEmail, validatePassword } } = require('../../commons')
const { validate } = require('../../data/src/models/Note')

function updateUser(id, name, email, password) {
    validateId(id)
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.updateOne({ _id: id }, { name, email, password })

}

module.exports = updateUser