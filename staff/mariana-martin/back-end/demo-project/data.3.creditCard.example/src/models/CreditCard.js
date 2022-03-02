const { model } = require('mongoose')
//me traigo el esquema
const { creditCard } = require('../schemas')
                        //este nombre es el que aparecerá en terminal al poner Show collections   y  creditCard es el esquema
const CreditCard = model ('CreditCard', creditCard)


module.exports = CreditCard
