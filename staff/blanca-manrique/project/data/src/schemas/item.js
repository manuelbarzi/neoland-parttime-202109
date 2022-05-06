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
        require: true
    },
    price:{
        type: Number,
        require: true
    }
})
module.exports = item