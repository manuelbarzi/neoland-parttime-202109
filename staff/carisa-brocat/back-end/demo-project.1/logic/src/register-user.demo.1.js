const registerUser = require('./register-user')

registerUser('Carisa BC', 'krisa@gmail.com', '12345678')
    .then(() => console.log('User registered'))
    .catch(console.error)