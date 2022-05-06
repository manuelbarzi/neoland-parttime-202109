const { models: { User } } = require('data')

function registerUser(username, email, password) {
    // TODO validate arguments
    return User.create({ username, email, password })
        .then(user => { })
}
module.exports = registerUser