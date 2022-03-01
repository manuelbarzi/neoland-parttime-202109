const {model} = require('mongoose')
const {stock} = require('../schemas')

const Stock = model('Stock', stock) 
// 'Stock' --> es el nombre que yo le quiero dar al modelo
// stock --> es el schema a partir del cual creamos el modelo 'Stock': El schema del modelo es stock

module.exports = Stock