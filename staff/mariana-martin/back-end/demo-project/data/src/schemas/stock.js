//caracteristicas del modelo de datos, descirbe los datos del stock:


const { Schema } = require('mongoose')
const { Types: { ObjectID } } = Schema   //tipo objectID, es función constructora(clase) que permite manejar ids

const stock = new Schema({
    product: {
        type: ObjectID,
        ref: 'Product',  //referencia a producto
        required: true
    },

    color: {
        type: String,
        required: true
    },

    size: {
        type: Object,
        required: true
    },
    
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = stock