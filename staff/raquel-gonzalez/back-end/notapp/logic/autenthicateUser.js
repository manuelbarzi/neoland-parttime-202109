/* const { models: {User}} = require ("data")

function authenticateUser (email, password){
    return User.findeOne ({email, password})
    //devuelve el critero de busqueda que cumpla
    .then (user =>{
        //si no hay user error
        if (!user) throw new Error ("wrong credentials")
        // si hay devuelveme el user.id
        return user.id
    })
}

module.exports = authenticateUser */

const { models : { user } } = require ("data")
const { 
    validators: { 
        validateEmail, 
        validatePassword 
    },
    errors: {
        AuthError
    }
} = require('commons')

function authenticateUser (email, password) {
    validateEmail (email)
    validatePassword (password)
    //autenticar usuario, buscame con findOne y devuelveme el id si no hay error
    return user.findOne ({ email, password })
    .then (user =>{
        //si no hay user error
        if (!user) throw new AuthError ("wrong credentials")
        // si hay devuelveme el user.id
        return user.id
    })
}

module.exports = authenticateUser