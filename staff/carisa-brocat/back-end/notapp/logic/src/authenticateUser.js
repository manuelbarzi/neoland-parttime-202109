const { models: { User } } = require('data')

function authenticateUser(email, password) {
    return User.findOne({ email, password })
        .then(user => {
            if (!user) throw new Error('wrong credentials')

            return user.id
        })
}

module.exports = authenticateUser