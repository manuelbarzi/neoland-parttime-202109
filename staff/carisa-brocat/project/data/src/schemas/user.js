// import mongoose from 'mogoose'
// const {Schema} = mongoose (idem a línea 3)

const { Schema } = require('mongoose')

const user = new Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    hairTexture: {
        type: String,
    },

    interests: {
        type: [String],
    },
})

module.exports = user