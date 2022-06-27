const { Schema } = require('mongoose')
const { Types: {ObjectId}} = Schema

const user = new Schema({
    name: {
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
    },
    role: {
        type: Number,
        required: true,
        enum: [0, 1],  //sólo puede haber 2 valores
        default: 1  //por defecto será paciente
    },
    image: {
        type: String,
        required: false
    }
})

module.exports = user