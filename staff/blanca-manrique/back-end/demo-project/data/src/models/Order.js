const {model} = require('mongoose')
const {order} = require('../schemas')

const Order = model('Order', order) 
// 'Order' --> es el nombre que yo le quiero dar al modelo
// order --> es el schema a partir del cual creamos el modelo 'Order': El schema del modelo es order

module.exports = Order