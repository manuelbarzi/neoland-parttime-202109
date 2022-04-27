/*const {models : { User } } = require('data')

function registerUser (name, email, password){

    return User.create ({name, email, password})
    .then (user => { })
}

module.exports = registerUser


//Codigo usado anteriormente
//const user= new User ({name, email, password})
// retun user.save ()
//.them (user => { }) */

const { models: { User } } = require('data')
const {
    validators: {
        validateName,
        validateEmail,
        validatePassword
    },
    errors: {
        DuplicityError
    }
} = require('commons')

function registerUser (name, email, password){
    validateName (name), 
    validateEmail (email),
    validatePassword (password)


    return User.create({ name, email, password })
    .then(user => { })
    .catch(error => {
        if (error.message.includes('duplicate'))
            throw new DuplicityError('user already exists')

        throw error
    })
}

module.exports = registerUser
