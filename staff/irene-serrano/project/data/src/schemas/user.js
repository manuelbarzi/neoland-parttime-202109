const { Schema } = require('mongoose')
const { Types:  { ObjectId } } = Schema

const user = new Schema({
    role: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 500,
    },
    stack: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }

})

module.exports = user