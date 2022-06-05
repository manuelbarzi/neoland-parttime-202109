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
        type: String, // "qasfas0892348wasdfasdf.png"
    },

    hairTexture: {
        type: String,
    },

    interests: {
        type: [{
            type: String,
            enum: ['moisture', 'growth', 'restore', 'definition', 'strength']
        }]        
    },

    favoritePosts: {
        type: [String],
    },

    quizPassed: {
        type: Boolean,
        default: false,
    }
})

module.exports = user