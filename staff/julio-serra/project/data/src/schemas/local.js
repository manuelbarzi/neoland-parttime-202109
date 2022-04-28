const { Schema } = require('mongoose')
const { type: { ObjectId } } = Schema
const comment = require('./comment')


const local = new Schema({
    id: {
        type: ObjectId,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    comments: [comment]
})


module.exports = local