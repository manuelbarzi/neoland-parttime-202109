const { models: { User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'company id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            user.id = user._id.toString()
            
            delete user._id
            delete user.__v
            delete user.password

            return user
        })
}

module.exports = retrieveUser