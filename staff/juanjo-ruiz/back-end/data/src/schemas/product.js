const { Schema } = require('mongoose')

const { Types: { ObjectId }} = Schema

const product = new Schema ({
    brand: {
        type: ObjectId,
        ref: 'Brand',
        required: true,
    },

    pid: {
        type: String,
        required: true,
        unique: true
    },
    
    model: {
        type: String,
        required: true,
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