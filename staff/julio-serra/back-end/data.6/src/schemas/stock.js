const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const stock = new Schema({

    product: {
        type: ObjectId, // es una propiedad de Schema
        ref: 'Product', // para un producto en concreto, referencia a un producto
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    color: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    }
})

module.exports = stock