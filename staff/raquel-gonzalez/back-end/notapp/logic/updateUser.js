
/*const {models : { User } } = require('data')

function updateUser(id, updatedUser){
   
    
    return User.updateOne({_id: id}, updatedUser)
}
module.exports = updateUser*/

const { models: { User }} = require('data')

function updateUser(userId, name, email, password) {
    return User.updateOne({ _id: userId }, { name, email, password })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0)
                throw new Error(`user with id ${userId} not found`)
        })
}

module.exports = updateUser