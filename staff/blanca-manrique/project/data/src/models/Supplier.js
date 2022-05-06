const { model } = require('mongoose')
const { supplier } = require('../schemas')

const Supplier = model ('Supplier', supplier)

module.exports = Supplier