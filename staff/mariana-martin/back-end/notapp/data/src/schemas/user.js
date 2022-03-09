//importo herramienta esuqema de la caja de mongoose
const { Schema } = require('mongoose')

//genero las características del esquema:

const user = new Schema({
    name: {
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
        required: true
    }
})

module.exports = user
