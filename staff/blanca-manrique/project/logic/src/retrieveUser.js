const { models: { User } } = require('data')

function retrieveUser(userId) {
    // TODO validate arguments
    return User.findById(userId)
        .then(doc => doc)
}
module.exports = retrieveUser