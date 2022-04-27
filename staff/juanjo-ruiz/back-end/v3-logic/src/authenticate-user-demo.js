const authenticateUser = require('./authenticate-User')
const { User } = require('data')

User.cache()
    .then(() => {
        const id = authenticateUser('juanjors93@gmail.com', '12341234')

        console.log(id)
    })