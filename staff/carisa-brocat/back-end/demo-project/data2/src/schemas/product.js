const { Schema } = require('mongoose')

const product = new Schema({
    brand: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    size: {
        type: Object,
        reuqired: true
    },

    color: {
        type: String,
        reuqired: true
    },

    stock: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        reuqired: true
    },

    image: {
        type: String,
        required: true
    },
})

module.exports = product