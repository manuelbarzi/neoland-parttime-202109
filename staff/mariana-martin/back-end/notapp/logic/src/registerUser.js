//me traigo de la dependencia de data los modelos y de modelos User

const { models: { User } } = require('data')

function registerUser(name, email, password){
    //Validators

    // const user = new User({ name, email, password })

    //     return user.save()
    //         .then(user => { })

    //Crear y guardar al mismo tiempo sería así:

    return User.create({ name, email, password })
        .then(user => { }) //no regresa nada

}

module.exports = registerUser

//