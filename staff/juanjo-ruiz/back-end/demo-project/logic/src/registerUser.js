const { models: { User } } = require('data')

function registerUser(name, email, password) {
    //TODO añadir validadores
    
    return User.create({ name, email, password })
        .then(user => { })
}

module.exports = registerUser