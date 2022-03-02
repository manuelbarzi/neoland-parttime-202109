//caracteristicas del modelo de datos, descirbe los datos del user:

const { Schema } = require('mongoose')  //a mon le pido schema

const user = new Schema ({
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true

    },

    password: {
        type: String,
        required: true,
    }

})

module.exports = user