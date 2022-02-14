const registerUser = require ('./register-user')

registerUser('Jules', 'jules@jules.com', '123123123')

.then(() => console.log('Usuario registrado'))
.catch(console.error )