const registerUser = require('./register-user')

registerUser('Mariana Martín DEMO2', 'mariana@mail.com', '123456789')
        .then(() => console.log('User succesfully resgistered!'))
        .catch(console.error)