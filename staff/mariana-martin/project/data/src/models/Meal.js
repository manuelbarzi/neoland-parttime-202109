const { model } = require('mongoose')
const { meal } = require('../schemas')

const Meal = model('Meal', meal)

module.exports = Meal