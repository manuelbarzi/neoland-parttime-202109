const Schema = require('mongoose')
const { Types: { ObjectId } } = Schema

const product = new Schema({

    pid: { // product ID
        type: String,
        required: true,
        unique: true
    },

    //relacionar un producto con la marca 
    brand: {
        type: ObjectId, // es una propiedad de Schema
        ref: 'Brand', // el identificador de cada marca
        required: true
    },

    model: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = product