//se basará del schema:

const { model } = require('mongoose')
const { brand }  = require('../schemas')   //traigo el schema de product del index


const Brand = model ('Brand', brand)  //esquema brand

module.exports = Brand