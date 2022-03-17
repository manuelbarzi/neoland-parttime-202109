const { models: { User} } = require('data')
const { validators: { validateId, validatePassword}} = require('commons')

function deleteUser(userId, password){
    validateId(userId, 'user id')
    validatePassword(password)


    //TODO eliminar todas las notas del usuario cuando se elimine este
    //
    return User.findById({ userId })
        .then(user => {

        })

    
    return User.deleteOne({ _id: userId, password }) //buscamos y borramos con deleteOne 
        .then(result => {
            const { deleteCount } = result  //el delectOne devuelve un propiedad deleteCount, si es 0 es que está mal el pwd o no existe user
                                            
            if(deleteCount === 0 ) 
                throw new Error(`user with id ${userId} not found or wrong credentials`)
        })
  

}

module.exports = deleteUser