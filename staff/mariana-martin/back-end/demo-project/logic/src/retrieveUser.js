
const { model: { User } } = require('data')
const { validateId } = require('./helpers/validators')


function retrieveUser(id) {
    validateId(id)

    return User.findById(id)
    .then()
}

module.exports = retrieveUser