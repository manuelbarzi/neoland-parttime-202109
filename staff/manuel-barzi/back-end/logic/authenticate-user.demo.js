const authenticateUser = require('./authenticate-user')

authenticateUser('manuelbarzi@gmail_.com', '123123123')
    .then(id => console.log(id))
    .catch(err => console.log(err))