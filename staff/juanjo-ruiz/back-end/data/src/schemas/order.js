const { Schema } = require('mongoose')

const { Types: { ObjectId }} = Schema

const order = new Schema({
    stock: {
        type: ObjectId,
        ref: 'Stock',
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    }
})

module.exports = order