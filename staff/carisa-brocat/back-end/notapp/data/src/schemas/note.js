const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const comment = require('./comment')

const note = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    text:{
        type: String,
        required: true
    },

    color: {
        type: String,
        reuqired: true,
    },

    public: {
        type: Boolean,
        required: true,
        default: false
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    comments: [comment]
})

module.exports = note