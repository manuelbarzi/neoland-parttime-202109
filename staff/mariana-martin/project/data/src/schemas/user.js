const { Schema } = require('mongoose')
const { Types: {ObjectId}} = Schema

const user = new Schema({
    // id: {type: ObjectId} //esto lo define Mongo automático, como _id
    role: {
        type: Number,
        required: true
    },
 
    image: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },


    registrationDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    nutritionist: {
        type: ObjectId,
        ref: 'User',
        required: false
    },
    age: {
        type: Number,
        required: false
    }, 
    weight: {
        type: Number,
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    measures: {
        type: [Number],
        required: false
    },
    goal: {
        type: String,
        required: false
    }
 
})

module.exports = user