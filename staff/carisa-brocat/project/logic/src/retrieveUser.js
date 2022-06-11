const { models: { User } } = require('data')
const { validators: {
    validateId,
}, errors: {
    ClientError, NotFoundError, AuthError
} } = require('commons')


function retrieveUser(userId) {
    validateId(userId, 'userId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) {
                throw new AuthError('user not found')
            }

            user.id = user._id.toString()
            delete user._id

            delete user.__v

            delete user.password

            return user
        })
        .catch(error => {
            throw new ClientError(error.message)
        })
}

module.exports = retrieveUser


