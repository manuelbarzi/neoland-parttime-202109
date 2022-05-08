const { 
    models: 
    { User } 
} = require('data')
const { 
    validators: 
    { validateId } 
} = require('commons')

function retrieveUser(id) {
    validateId(id)

    return User.findById(id).lean()
    .then(user => {
        user.id = user._id.toString()
        
        delete user.id // borramos del doc la propiedad _id
        delete user.__v // borramos del doc la propiedad __v
        delete user.password // borramos del doc la propiedad password, no nos interesa saberla

        return user // devolvemos el usuario con todas las propiedads correctas y ordenadas
    })
}

module.exports = retrieveUser