const { model } = require('mongoose')
const { stock } = require('../schemas')

const Stock = model('Stock', stock)

module.exports = Stock