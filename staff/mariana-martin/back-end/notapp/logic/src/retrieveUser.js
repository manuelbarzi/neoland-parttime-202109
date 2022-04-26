//versión usando el .lean(), en vez de ._doc

const { User } = require('data/src/models')
const { validators: {validateId}} = require('commons')

function retrieveUser(userId){
    validateId(userId, 'user id')

//RETURN CADENA DE PROMESAS

    return User.findById(userId).lean()
        .then(user => {   
        

            user.id = user._id.toString()
            delete user._id

            delete user.__v

            delete user.password

            return user
        })
}

module.exports = retrieveUser

