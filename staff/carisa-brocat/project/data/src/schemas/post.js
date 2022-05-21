// import mongoose from 'mogoose'
// const {Schema} = mongoose (idem a línea 3)
// const {ObjectId} = Schema.Types (idem a liena 7?)

const comment = require('./comment')
const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const post = new Schema({
    user: {
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
    },

    category: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
    },

    image: {
        type: String,
    },

    likes: {
        type: Number,
    },

    dislikes: {
        type: Number,
    },

    date: {
        type: Date,
        required: true,
        default: Date.now,
    },

    address: {
        type: String,
    },

    comments: [comment]
})

module.exports = post