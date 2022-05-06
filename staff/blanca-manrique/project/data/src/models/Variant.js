const { model } = require('mongoose')
const { variant } = require('../schemas')

const Variant = model ('Variant', variant)

module.exports = Variant