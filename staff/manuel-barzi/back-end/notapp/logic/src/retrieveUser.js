const { models: { User } } = require('data')

function retrieveUser(userId) {
    // validate arguments

    return User.findById(userId).lean()
        .then(user =>  {
            // sanitize
            user.id = user._id.toString()
            delete user._id

            delete user.__v

            delete user.password

            return user
        })
}

module.exports = retrieveUser