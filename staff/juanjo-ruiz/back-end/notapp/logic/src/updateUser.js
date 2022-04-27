const { models: { User } } = require('data')
const { validators: { validateId, validateName, validateEmail, validatePassword } } = require('commons')

function updateUser(userId, name, email, password) {
    validateId(userId, 'user id')
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.updateOne({ _id: userId }, { name, email, password })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0)
                throw new Error(`user with id ${userId} not found`)
        })
}

module.exports = updateUser