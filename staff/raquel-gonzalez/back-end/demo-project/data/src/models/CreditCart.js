const { model } = require('mongoose')
const { creditCard } = require('../schemas')

const CreditCard = model('CreditCard', creditCard)

module.exports = CreditCard