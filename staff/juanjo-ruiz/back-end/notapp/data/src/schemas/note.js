const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const note = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    color: {
        type: String,
        required: true,
        default: 'white'
    },

    public: {
        type: Boolean,
        required: true,
        default: false
    },

    text: {
        type: String,
        required: true
    }
})

module.exports = note