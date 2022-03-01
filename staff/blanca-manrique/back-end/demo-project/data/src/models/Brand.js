const {model} = require('mongoose')
const {brand} = require('../schemas')

const Brand = model('Brand', brand) 
// 'Brand' --> es el nombre que yo le quiero dar al modelo
// brand --> es el schema a partir del cual creamos el modelo 'Brand': El schema del modelo es brand

module.exports = Brand