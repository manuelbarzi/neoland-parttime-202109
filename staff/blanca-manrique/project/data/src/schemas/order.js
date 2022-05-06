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
        require: true,
        default: Date.now
    },
    status:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    },
    items: [item]
})
module.exports = order