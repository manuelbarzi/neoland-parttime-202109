//caracteristicas del modelo de datos, descirbe los datos de la marca:

const { Schema } = require('mongoose')


const brand = new Schema({
    name:{
        type: String, 
        required: true,
        unique: true
    }

})

module.exports = brand