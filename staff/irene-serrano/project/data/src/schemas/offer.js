const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const request = require('./request')

const offer = new Schema({
    company: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stack: {
        type: String,
        required: true,
    },
    minSalary: {
        type: Number,
        required: true,
    },
    maxSalary: {
        type: Number,
        required: true,
    },
    publicationDate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    requests: [request],
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = offer