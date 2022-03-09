const { models: { User} } = require('data')

function deleteUser(id, password){
    //Validators
    
    return User.findById(id).then((user) => {
        if(!user) throw new Error(`User with ${id} not found`)

        if(user.password !== password) throw new Error('wrong credentials')

        return User.deleteOne({ _id: id }).then((result) =>{
            if(result.deletedCount === 0)
            throw new Error (`Cannot delete user with id ${id}`)
        } )
    })

}

module.exports = deleteUser