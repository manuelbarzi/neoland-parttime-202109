const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const product = new Schema({
    supplier: {
        type: ObjectId,
        ref: 'Supplier',
        required: true
    },
    name:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    material:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    salePrice:{
        type: Number,
        required: true
    }
})
module.exports = product