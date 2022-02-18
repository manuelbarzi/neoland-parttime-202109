const authenticateUser = require('./authenticate-user')


authenticateUser('lucasmleone@gmail.com', '123123123')
.then(id => console.log(id))
.catch(err=> console.log(err))