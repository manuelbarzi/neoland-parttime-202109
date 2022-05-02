const { Schema } = require('mongoose')
const { type: { ObjectId } } = Schema

const booking = new Schema ({
    id: {
        type: ObjectId,
        required: true
    },
    user: {
        type: ObjectId,
        required: true
    },
    space: {
        type: ObjectId,
        required: true
    },
    from: {
        type: Date,
        default: Date.now,
        required: true
    },
    to: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = booking