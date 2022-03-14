const { models: { User } } = require('data')

function updateUser(userId, name, email, password) {
    return User.updateOne({ _id: userId }, { name, email, password })
        .then(result => {
            const { mactchedCount } = result

            if (mactchedCount === 0)
                throw new Error(`user with id ${userId} nor found`)
        })
}

module.exports = updateUser