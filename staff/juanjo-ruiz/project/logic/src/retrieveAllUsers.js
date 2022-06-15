const { models: { User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveAllUsers(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then(userId => {
            if (!userId) throw new NotFoundError(`userId with id ${userId} not found`)

            return User.find({ active: true }).lean().sort('-date')
        })
        .then(users => {
            users.forEach(user => {

                user.id = user._id.toString()

                delete user._id
                delete user.__v
            })
            return users
        })
}

module.exports = retrieveAllUsers