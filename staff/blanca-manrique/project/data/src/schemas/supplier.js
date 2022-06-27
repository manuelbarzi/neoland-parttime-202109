const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const supplier = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    web:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String, 
        required: true
    },
    tradeAssurance: {
        type: Boolean,
        required: true,
        default: true
    }
})
module.exports = supplier