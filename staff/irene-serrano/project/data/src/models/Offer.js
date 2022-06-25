const {model} = require('mongoose')
const { offer } = require('../schemas')


const Offer = model('Offer', offer)

module.exports = Offer