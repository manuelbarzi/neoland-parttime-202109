const { model } = require('mongoose')
const { product } = require('../schemas')

const Product = model('Product', product)

module.exports = Product