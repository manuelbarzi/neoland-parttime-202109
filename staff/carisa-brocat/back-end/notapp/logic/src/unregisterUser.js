const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function unregisterUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return User.deleteOne({ _id: userId, password })
        .then(result => {
            const { deleteCount } = result

            if (deleteCount === 0)
                throw new Error(`user with id ${userId} nor found or wrong credentials`)
        })
}

module.exports = unregisterUser