const { Schema } = require('mongoose')

const { Types: { ObjectID } } = Schema

const stock = new Schema({
    product: {
        type: ObjectID,
        ref: 'Product',
        required: 'true'
    },

    color: {
        type: Object,
        required: true
    },

    size: {
        type: Object,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = stock