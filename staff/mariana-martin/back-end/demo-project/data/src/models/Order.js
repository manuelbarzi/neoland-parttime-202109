//se basará del schema:
const { model } = require('mongoose')
const { order }  = require('../schemas')   //traigo el schema de order del index

//colección Order
const Order = model('Order', order)

module.exports = Order