const registerUser = require('./register-user')


registerUser('Lucas Leone', 'lucasmleone@gmail.com', '123123123')
.then(() => console.log('User registered!'))
.catch(console.error) 