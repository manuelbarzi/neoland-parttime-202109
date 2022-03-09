//caracteristicas del modelo de datos, descirbe los datos del user:

const { Schema } = require('mongoose')  //a mon le pido schema

const creditCard = require('./creditCard')

const user = new Schema ({
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    //validador de mail

    },

    password: {
        type: String,
        required: true,
    },
    
     /*
    TODO
    - creditCards ([creditCard])
    HINT https://mongoosejs.com/docs/subdocs.html
    HINT https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html
    */
    
    //le digo a mongoose que hay una propiedas que tendra un array de objetos
    creditCards: [creditCard] 
})

module.exports = user