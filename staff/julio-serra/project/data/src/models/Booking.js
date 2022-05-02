const model = require('mongoose')
const { booking } = require('../schemas')

const Booking = model('Booking', booking)

module.exports = Booking