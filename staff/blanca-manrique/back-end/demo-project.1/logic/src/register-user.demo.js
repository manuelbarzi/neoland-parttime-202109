const registerUser = require('./register-users')
const { User } = require('data')

User.cache()
    .then(() => {
        registerUser('Blan Mt', 'blanmt@gmail.com', '121212')
            .then(() => console.log('user registered!'))
            .catch(console.error)
    })

