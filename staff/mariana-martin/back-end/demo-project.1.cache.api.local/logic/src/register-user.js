
//en esta version findbymail ya no es una promesa, es sinrono, porque esta guardado en memoria

const { User } = require('data')
const { validateName, validateEmail, validatePassword} = require('./helpers/validators')

function registerUser(name, email, password){
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    let user = User.findByEmail(email)   //se usa la clase User con método asociado a la clse no a instancia (porque no hemos hecho New User, porlo que se usa la palabra statis en el archivo de user, en el método)
        
            if(user) throw new Error('user already exists!')

            user = new User({ id: `USER-${Date.now()}`, name, email, password })

            return user.save() //el save si es una promesa
        
}

module.exports = registerUser