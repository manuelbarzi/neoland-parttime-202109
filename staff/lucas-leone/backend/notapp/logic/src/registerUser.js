const {models : { User } } = require('data')

function registerUser (name, email, password){
    
    //TODO validations

    /* Antes utilizabamos este codigo:

    const user = new User({ name, email, password })

    return user.save()
        .then(user => { })

    Ahora podemos utilizar un atajo:
    */
   return User.create({name, email, password})
    .then(user => { })

}

module.exports = registerUser