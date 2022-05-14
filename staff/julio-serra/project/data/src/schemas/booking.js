const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const booking = new Schema ({

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