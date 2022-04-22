const {models : { User } } = require('data')

function updateUser(id, name, email, password ){

    return User.updateOne({_id: id}, {name, email, password})
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`user with id ${userId} not found`)
    })
}
module.exports = updateUser