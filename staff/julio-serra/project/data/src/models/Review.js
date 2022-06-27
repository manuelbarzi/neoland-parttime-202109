const { model } = require('mongoose')
const { review } = require('../schemas')


const Review = model('Review', review)

module.exports = Review