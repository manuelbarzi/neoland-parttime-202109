
const { User } = require('../models')

function registerUser(name, email, password){
    //validateName
    //ValidateEmail
    //Password

    return User.findByEmail(email)   //se usa la clase User con método asociado a la clse no a instancia (porque no hemos hecho New User, porlo que se usa la palabra statis en el archivo de user, en el método)
        .then(user => {
            if(user) throw new Error('user already exists!')

            user = new User({ id: `USER-${Date.now()}`, name, email, password })

            return user.save()
        })


}

module.exports = registerUser