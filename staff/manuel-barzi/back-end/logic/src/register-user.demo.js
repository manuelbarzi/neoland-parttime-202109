const registerUser = require('./register-user')
const { User } = require('data')

User.cache()
    .then(() => {
        registerUser('Manuel Barzi', 'manuelbarzi2@gmail.com', '123123123')
            .then(() => console.log('User registered!'))
            .catch(console.error)
    })
