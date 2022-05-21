const { models: { User } } = require('data')
const { errors: {
    AuthError,
    ClientError,
},
    validators: {
        validatePassword,
        validateId,
    }
} = require('commons')
const { comparePassword } = require('./helpers/crypt')

function deleteUser(userId, password) {
    validateId(userId, 'userId')
    validatePassword(password)

    return User.findById(userId)
        .then(user => {

            return comparePassword(password, user.password)
                .then((isSamePassword) => {
                    if (!isSamePassword) {
                        throw new AuthError('Invalid Credentials')
                    }

                    return User.deleteOne({ _id: userId })
                        .then(result => { })
                        .catch(error => {
                            throw new ClientError(error.message)
                        })
                })
        })
}

module.exports = deleteUser
