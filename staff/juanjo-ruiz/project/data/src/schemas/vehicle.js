const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const part = require('./part')

const vehicle = new Schema({
    user: {
        type: ObjectId,
        ref: 'Company',
        required: true
    },

    lisense: {
        type: String,
        required: true,
        unique: true
    },

    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    frame: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    parts: [part]
})

module.exports = vehicle