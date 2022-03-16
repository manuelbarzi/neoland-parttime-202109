const { models: { User} } = require('data')

function deleteUser(userId, password){
    //Validators
    
    return User.deleteOne({ _id: userId, password }) //buscamos y borramos con deleteOne 
        .then(result => {
            const { deleteCount } = result  //el delectOne devuelve un propiedad deleteCount, si es 0 es que está mal el pwd o no existe user
                                            
            if(deleteCount === 0 ) 
                throw new Error(`user with id ${userId} not found or wrong credentials`)
        })
  

}

module.exports = deleteUser