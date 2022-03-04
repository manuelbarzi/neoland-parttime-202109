const { model } = require('mongoose')
const { order } = require('../schemas')

const Order = model('Order', order)

module.exports = Order