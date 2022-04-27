const registerUser = require('./register-user')
const { User } = require('data')

User.cache()
    .then(() => {
        registerUser('Juanjo Ruiz', 'juanjors9321@gmail.com', '12341234')
            .then(() => console.log('User registered'))
            .catch(console.error)
    })