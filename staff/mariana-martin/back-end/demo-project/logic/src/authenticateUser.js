const { models: { User }} =require('data')  //traigo modelo user de paquete data
const { validateEmail, validatePassword} = require('./helpers/validators')

function authenticateUser(email, password) {
        validateEmail(email)
        validatePassword(password)

    return User.findOne({ email, password}) //buscamos un usuario con un filtro un objeto(mail y pwd)
        .then(user => {
            if(!user) throw new Error('wrong credentials!!')

            return user.id   //si lo ha encontrado retorno id
        })
    
}
module.exports = authenticateUser