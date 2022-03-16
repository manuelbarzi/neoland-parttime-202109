//me traigo de la dependencia de data los modelos y de modelos User
//node si permite niveles de destructración: 

const { models: { User } } = require('data')
const { validators: { validateName, validateEmail, validatePassword } } = require('commons')

function registerUser(name, email, password){
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    // const user = new User({ name, email, password })

    //     return user.save()
    //         .then(user => { })

    //Crear y guardar al mismo tiempo sería así:

    return User.create({ name, email, password })
        .then(user => { }) //no regresa nada

}

module.exports = registerUser

//