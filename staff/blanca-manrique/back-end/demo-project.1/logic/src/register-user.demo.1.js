const registerUser = require('./register-users')

registerUser('Blan Mt', 'blanmt@gmail.com', '121212')
    .then(()=> console.log('user registered!'))
    .catch(console.error)