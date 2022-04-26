//caracteristicas del modelo de datos, descirbe los datos del product:


const { Schema } = require('mongoose')
const { Types: { ObjectID } } = Schema   //tipo objectID, es función constructora(clase)

const product = new Schema({
    brand:{
        type: ObjectID,  //relaciono product con brand
        ref: 'Brand',  //va a referenciar a la colección de brand
        required: true
    },
    
    pid: {
        type: String,
        required: true,
        unique: true,
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