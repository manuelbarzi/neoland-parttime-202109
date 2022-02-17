const authenticateUser = require('./authenticate-user')

authenticateUser('mariana@mail.com', '123456789')
    .then(id => console.log(id))
    .catch(err => console.log(err))