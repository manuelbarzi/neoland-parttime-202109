const Schema = require('mongoose')

const product = new Schema({
    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    size: {
        type: Object, //vale tando numerico como string
        required: true,
    },

    color: {
        type: String,
        required: true
    },

    stock: {
        type: number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = product