const authenticateUser = require('./authenticate-user')

authenticateUser('blanmt@gmail.com', '121212')
    .then(id => console.log(id))
    .catch(err => console.log(err))