//se basará del schema:
const { model } = require('mongoose')
const { stock }  = require('../schemas')   //traigo el schema de product del index


const Stock = model('Stock', stock)

module.exports = Stock