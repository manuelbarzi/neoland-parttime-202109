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
    description: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        enum: ['dj', 'audio', 'wc', 'security', 'lights']
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
        required: false
    }
})


module.exports = space