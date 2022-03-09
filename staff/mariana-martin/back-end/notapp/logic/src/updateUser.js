const { models: { User }} = require('data')

function updateUser(id, updatedUser){
    //Validators

    return User.updateOne({ _id: id, updatedUser})

}

module.exports = updateUser