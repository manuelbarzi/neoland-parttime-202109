const { models: { User } } = require('data')
const { validators: {
    validateId,
    validateName,
    validateEmail,
    validatePassword }
} = require('commons')

function updateUser(userId, name, email, password) {
    validateId(userId)
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.updateOne({ _id: userId }, { name, email, password })
        .then(result => {
            const { mactchedCount } = result

            if (mactchedCount === 0)
                throw new Error(`user with id ${userId} nor found`)
        })
}

module.exports = updateUser