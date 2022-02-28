//Verisón con getters y setters, sin usar el ._doc
//versión con findbymail sincrono con datos cargados en memoria


const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require('data')


function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)


    
    const user =  User.findByEmail(email)
       
            if(!user) throw new Error('user does not exist!')

            if(user.password !== password) throw new Error('password is incorrect!') //.passwrod, me lleva al getter

            return user.id   //nos devuelve el id del usuario sitodo va bien
        

}

module.exports = authenticateUser