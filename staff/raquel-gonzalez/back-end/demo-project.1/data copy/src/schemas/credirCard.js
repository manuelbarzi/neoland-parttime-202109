const { Schema } = require('mongoose')

const creditCard = new Schema({
    fullName: {
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