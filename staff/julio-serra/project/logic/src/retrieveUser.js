const { 
    models: 
    { User } 
} = require('data')
const { 
    validators: 
    { validateId },
    errors: 
    {NotFoundError} 
} = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'user id')

    return User.findById(userId).lean()
    .then(user => {
        if(!user) throw new NotFoundError(`user with id ${userId} not found`)
       
        user.id = user._id.toString()
        
        delete user.id // borramos del doc la propiedad _id
        delete user.__v // borramos del doc la propiedad __v
        delete user.password // borramos del doc la propiedad password, no nos interesa saberla

        return user // devolvemos el usuario con todas las propiedads correctas y ordenadas
    })
}

module.exports = retrieveUser