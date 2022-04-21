const { models: { User } } = require('data')

function registerUser(name, email, password) {
    // TODO validate input arguments

    /*
    const user = new User({ name, email, password })

    return user.save()
        .then(user => { })
    */

    return User.create({ name, email, password })
        .then(user => { })
}

module.exports = registerUser