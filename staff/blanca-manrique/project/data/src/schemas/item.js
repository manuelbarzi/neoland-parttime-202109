const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const item = new Schema({
    variant:{
        type: ObjectId,
        ref: 'Variant',
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})
module.exports = item