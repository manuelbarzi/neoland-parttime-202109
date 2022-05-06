const { Schema } = require('mongoose')
const { Types: { ObjectId } } = require('Schemas')
const part = require('./part')

const vehicle = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    lisense: {
        type: String,
        required: true
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
        required: true
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