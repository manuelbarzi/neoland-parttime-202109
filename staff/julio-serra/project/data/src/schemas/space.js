const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const Review = require('./review')
const Booking = require('./booking')

const space = new Schema({
    admin: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        requerid: true
    },
    features: {
        type: [String],
        enum: ['dj', 'audio', 'wc', 'security', 'lights']
    },
    typeDetail: {
        type: String,
        required: true
    },
    depositDetail: {
        type: String,
        requerid: true
    },
    sizeDetail: {
        type: String,
        requerid: true
    },
    accessDetail: {
        type: [String],
        enum: ['None shared', 'Grounded level', 'Host access']
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    reviews: [Review],
    bookings: [Booking],
    image: {
        type: String,
    }
})


module.exports = space