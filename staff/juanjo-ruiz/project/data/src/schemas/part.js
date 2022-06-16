const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const part = new Schema({
    company: {
        type: ObjectId,
        ref: 'Company',
        required: true
    },

    user: {
        type: ObjectId,
        ref: 'User',
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
        type: Number,
        required: true,
        min: 0,
        max: 2,
        default: 2
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = part