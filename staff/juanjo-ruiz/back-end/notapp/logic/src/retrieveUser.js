const { models: { User } } = require('data')

function retrieveUser(id) {
    //TODO validaciones

    return User.findById(id)
        .then(doc => doc)
}

module.exports = retrieveUser