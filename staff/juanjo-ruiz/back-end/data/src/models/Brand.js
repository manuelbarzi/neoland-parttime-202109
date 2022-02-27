const { model } = require('mongoose')
const { brand } = require('../schemas')

const Brand = model('Brand', brand)

module.exports = Brand 