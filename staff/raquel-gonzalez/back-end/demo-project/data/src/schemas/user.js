const { Schema } = require("mongoose")

const user = new Schema({
    name: {
        //El modelo de usuario tiene que ser tipo string y requerido si (true)
        type: String,
        required: true
    },
    email: {
        //añadimos el campo unique para indicar que el campo es unico, no se pueden dar de alta dos mails iguales
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }


})

module.exports = user