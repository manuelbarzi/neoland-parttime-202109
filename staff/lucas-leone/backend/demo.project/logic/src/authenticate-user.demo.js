const authenticateUser = require('./authenticate-user')

const { User } = require('data')

User.cache()
    .then(() => {
        const id = authenticateUser('manuelbarzi@gmail.com', '123123123')
        
        console.log(id)
    })