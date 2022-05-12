const { Schema } = require('mongoose')

const company = new Schema({
    businessName: {
        type: String,
        required: true
    },

    cif: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        defualt: 'admin'
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    date: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = company