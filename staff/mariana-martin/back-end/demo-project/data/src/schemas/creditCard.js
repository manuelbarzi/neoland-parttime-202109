/*
TODO implement me
properties
- full name (string)
- number (string, ex: '0012 1231 1231 1231')
- expiration (date)
*/
const { Schema } = require('mongoose')

const creditCard = new Schema ({
    fullName:{
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    },

    expiration: {
        type: Date,
        required: true
    }
})

module.exports = creditCard