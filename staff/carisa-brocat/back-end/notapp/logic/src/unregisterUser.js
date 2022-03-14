const { models: User } = require('data')

function deleteUser(userId, password) {
    return User.deleteOne({ _id: userId, password })
        .then(result => {
            const { deleteCount } = result

            if (deleteCount === 0)
                throw new Error(`user with id ${userId} nor found or wrong credentials`)
        })
}

module.exports = deleteUser