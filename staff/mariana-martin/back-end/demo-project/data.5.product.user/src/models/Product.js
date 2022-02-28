//se basará del schema:
const { model } = require('mongoose')
const { product }  = require('../schemas')   //traigo el schema de product del index


const Product = model ('Product', product)

module.exports = Product