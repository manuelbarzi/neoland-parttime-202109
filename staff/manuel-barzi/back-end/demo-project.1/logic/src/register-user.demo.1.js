const registerUser = require('./register-user')

registerUser('Manuel Barzi', 'manuelbarzi@gmail.com', '123123123')
    .then(() => console.log('User registered!'))
    .catch(console.error)