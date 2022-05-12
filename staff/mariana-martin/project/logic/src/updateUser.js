const { models: { User }} = require('data')

function updateUser(userId, username, email, password){
    return User.updateOne({ _id: userId}, {username, email, password})
        .then(result => {
            const { matchedCount } = result

            if(matchedCount === 0 )
                throw new Error(`user with id ${userId} not found`)
        })
}

module.exports = updateUser