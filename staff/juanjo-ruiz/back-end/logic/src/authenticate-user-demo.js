const authenticateUser = require('./authenticate-User')

authenticateUser('juanjors93@gmail.com', '12341234')
    .then(id => console.log(id))
    .catch(err => console.log(err))