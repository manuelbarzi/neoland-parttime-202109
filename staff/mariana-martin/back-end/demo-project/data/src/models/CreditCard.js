//se basará del schema:
const { model } = require('mongoose')
const { creditCard }  = require('../schemas')   //traigo el schema de product del index


const CreditCard = model('CreditCard', creditCard)

module.exports = CreditCard