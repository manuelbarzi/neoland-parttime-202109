const { Schema } = require('mongoose')
const { creditCard } = require('./creditCard')

//creamos el esquema de mongoose

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    creditCards: [creditCard]
})

module.exports = user