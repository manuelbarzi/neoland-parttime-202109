const registerUser = require('./register-user')

registerUser('Juanjo Ruiz', 'juanjors93@gmail.com', '12341234')
    .then(() => console.log('User registered'))
    .catch(console.error)