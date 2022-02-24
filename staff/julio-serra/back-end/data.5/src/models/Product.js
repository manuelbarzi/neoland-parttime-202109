const { model } = require('mongoose')
const { user } = require('../schemas')

const Product = model('Product', user)

module.exports = Product