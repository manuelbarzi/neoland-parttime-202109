const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const part = new Schema({
    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    },

    vehicle: {
        type: ObjectId,
        ref: 'vehicle',
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true
    },

    state: {
        type: Array,
        required: true,
        default: [0]
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = part