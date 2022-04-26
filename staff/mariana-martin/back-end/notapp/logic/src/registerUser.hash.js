//me traigo de la dependencia de data los modelos y de modelos User
//node si permite niveles de destructración: 
//VERSIÓN CON PASSWORD ENCRIPTADO HASH

const { models: { User } } = require('data')
const { validators: { validateName, validateEmail, validatePassword }, errors: {DuplicityError} } = require('commons')
const bcrypt = require('bcryptjs')


function registerUser(name, email, password){
    validateName(name)
    validateEmail(email)
    validatePassword(password)

  return bcrypt.hash(password, 10)  //hasheo (cifrar) el password (paso el string el pwd y el  salt 10 tema interno matematico) 
    .then(hash => User.create({ name, email, password: hash}))  //paso el hash como pwd
    .then(user => { }) //ignoro no devuelvo nada
    .catch(error => {
        if(error.message.includes('duplicate'))
        throw new DuplicityError('user already exists')

        throw error
    })

   

}

module.exports = registerUser

