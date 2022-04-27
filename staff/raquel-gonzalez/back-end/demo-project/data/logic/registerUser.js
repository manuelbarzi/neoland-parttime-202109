const { models = { User} } = require ("data")

function registerUser ( name, email, password) {

    return User.create ({name, email, password})
        .them (user => { })

}

module.exports = registerUser
