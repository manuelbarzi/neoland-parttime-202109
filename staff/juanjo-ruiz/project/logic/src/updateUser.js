const { models: { User } } = require('data')
const { validators: { validateId, validateString, validateEmail }, errors: { NotFoundError } } = require('commons')

function updateUser(userId, name, email) {
    validateId(userId, 'user id')
    validateString(name, 'name')
    validateEmail(email)

    return User.updateOne({ _id: userId }, { name, email })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} not found`)
        })
}

module.exports = updateUser
