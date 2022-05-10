const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const Comment = require('./comment')
const Booking = require('./booking')


const space = new Schema({

    admin: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    comments: [Comment],
    bookings: [Booking],
    image: {
        type: String,
        required: false
    }
})


module.exports = space