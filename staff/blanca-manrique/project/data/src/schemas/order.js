const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const item = require('./item')

const order = new Schema({
    user:{
        type: ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    status:{
        type: String,
        enum: ['draft', 'in progress', 'cancelled', 'completed'],
        required: true
    },
    total:{
        type: Number
    },
    description: {
        type: String
    },
    items: [item]
})
module.exports = order