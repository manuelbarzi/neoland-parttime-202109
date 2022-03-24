const authenticateUser = require('./authenticate-user')

authenticateUser('krisa@gmail.com', '12345678')
    .then(id => console.log(id))
    .catch(err => console.log(err))