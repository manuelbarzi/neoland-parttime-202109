//caracteristicas del modelo de datos, descirbe los datos del product:

const { Schema } = require('mongoose')


const product = new Schema({
    brand:{
        type: String, 
        required: true
    },
    model: {
        type: String, 
    },
    size:{
        type: String, 
    },
    color:{
        type: String, 
    },
    stock:{
        type: String, 
    },
    image:{
        type:String,
        required: true
    }

})



module.exports = product