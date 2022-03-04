const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    text: {

    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = comment