const { models: { User } } = require('data')
const { errors: { NotFoundError }, validators: { validateId }} = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'user id')

    return User.findById(userId).lean()
        .then(user =>  {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            // sanitize
            user.id = user._id.toString()
            delete user._id

            delete user.__v

            delete user.password

            return user
        })
}

module.exports = retrieveUser