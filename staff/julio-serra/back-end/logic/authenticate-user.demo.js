const authenticateUser = require('./authenticate-user')

authenticateUser('jules@jules.com', '123123123')
.then(id => console.log(id))
.catch(error => console.log(error))
