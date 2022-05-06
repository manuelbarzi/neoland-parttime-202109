const { models: { User } } = require('data')

function authenticateUser(email, password) {
    // TODO validate arguments
    return User.findOne({ email, password })
        .then(user => { 
            if (!user) throw new Error('wrong credentials')

            return user.id
        })
}
module.exports = authenticateUser