const {model} = require('mongoose')
const {product} = require('../schemas')

const Product = model('Product', product)
// 'Product' --> es el nombre que yo le quiero dar al modelo
// product --> es el schema a partir del cual creamos el modelo 'Product': El schema del modelo es product

module.exports = Product