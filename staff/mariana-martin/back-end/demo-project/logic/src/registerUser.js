//me traigo del index el modelo de usuario, tengo el paquete data
//tdel paquete data los modelos y de los modelos el user
const { models: { User } } = require('data')  
const { validateName, validateEmail, validatePassword} = require('./helpers/validators')


function registerUser(name, email, password){
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    // const user = new User({ name, email, password})

    // return user.save()
    //     .then(user = { })  (creas el user y con una función (callback) no devuelve nada)

//////////OTRA manera de crear y guardar al mismo tiempo:
    return User.create({ name, email, password})
        .then(user => { })

}

module.exports = registerUser