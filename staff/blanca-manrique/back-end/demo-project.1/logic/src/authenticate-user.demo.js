const authenticateUser = require('./authenticate-user')
const { User } = require('data')

User.cache()
    .then(() => {
        const id = authenticateUser('blanmt@gmail.com', '121212')
        console.log(id)
    })
