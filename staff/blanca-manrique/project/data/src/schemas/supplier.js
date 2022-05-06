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
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    web:{
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    adress: {
        type: String,
        require: true
    },
    contactPerson: {
        type: String, 
    },
    tradeAssurance: {
        type: Boolean,
        require: true,
        default: true
    }
})
module.exports = supplier