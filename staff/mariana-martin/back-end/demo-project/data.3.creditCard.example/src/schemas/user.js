//me traigo la clase esquema de mongoose
const { Schema } = require ('mongoose')
const  creditCard  = require('./creditCard')
//genero el squema de usuario

const user = new Schema ({
    //defino el esquema de usuario
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
   
    creditCards: [creditCard]
})

module.exports = user