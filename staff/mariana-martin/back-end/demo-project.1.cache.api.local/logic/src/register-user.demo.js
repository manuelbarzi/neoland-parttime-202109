//Versión que carga primero en cache.

const registerUser = require('./register-user')
const { User } = require('data')

User.cache()
.then(() => {

registerUser('Mariana Martín DEMO2', 'marianax2@mail.com', '123456789')
        .then(() => console.log('User succesfully resgistered!'))
        .catch(console.error)

} )
