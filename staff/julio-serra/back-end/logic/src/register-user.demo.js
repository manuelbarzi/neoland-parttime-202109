const registerUser = require ('./register-user')

registerUser('DJules', 'jules2@jules.com', '123123123')

.then(() => console.log('Usuario registrado'))
.catch(console.error )