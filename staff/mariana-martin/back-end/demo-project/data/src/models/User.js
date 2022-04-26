//se basará del schema:
const { model } = require('mongoose')
const {user}  = require('../schemas')   //ojo: en las otras User demo, no está importado con destrucutracion en el index


                    //nombre y luego el esquema
const User = model ('User', user)

module.exports = User