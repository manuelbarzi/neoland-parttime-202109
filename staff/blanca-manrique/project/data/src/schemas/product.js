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
        require: true
    },
    category: {
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    model:{
        type: String,
        require: true
    },
    image: {
        type: String
    },
    material:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    salePrice:{
        type: Number,
        require: true
    }
})
module.exports = product