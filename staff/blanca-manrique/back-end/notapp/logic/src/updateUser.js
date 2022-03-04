const {models : { User } } = require('data')

function updateUser(id, updatedUser){
    // TODO validate id
    // TODO validate update is object
    // TODO validate each property
    
    return User.updateOne({_id: id}, updatedUser)
}
module.exports = updateUser