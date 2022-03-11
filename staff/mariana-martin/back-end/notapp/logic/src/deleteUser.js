const { models: { User} } = require('data')

function deleteUser(userId, password){
    //Validators
    
    return User.deleteOne({ _id: userId, password })
        .then(result => {
            const { deleteCount } = result

            if(deleteCount === 0 )
                throw new Error(`user with id ${userId} not found or wrong credentials`)
        })
  

}

module.exports = deleteUser