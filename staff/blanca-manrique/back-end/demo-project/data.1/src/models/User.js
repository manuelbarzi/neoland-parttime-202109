const {model} = require('mongoose')
const user = require('../schemas/user')

const User = model('User', user) 
// 'User' --> es el nombre que yo le quiero dar al modelo
// user --> es el schema a partir del cual creamos el modelo 'User': El schema del modelo es user

module.exports = User