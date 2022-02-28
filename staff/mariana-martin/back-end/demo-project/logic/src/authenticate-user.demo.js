//Versión con datos cargados en cache, previamente

const authenticateUser = require('./authenticate-user')
const {User} = require('data')


//tira de cache, no depende de cara de dtos, porque están pre cargados
User.cache()
.then(() => {

const id = authenticateUser('mariana@mail.com', '123456789')

console.log(id)

})