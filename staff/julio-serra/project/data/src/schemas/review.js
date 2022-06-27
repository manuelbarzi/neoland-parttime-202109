const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const review = new Schema({

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
    score: {
        type: Number,
        required: false,
        min: 0,
        max: 5
    }

})

module.exports = review