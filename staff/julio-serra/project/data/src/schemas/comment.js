const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const comment = new Schema({
    id: {
        type: ObjectId,
        required: true
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
    rating: {
        type: Number,
        required: false
    }

})

module.exports = comment