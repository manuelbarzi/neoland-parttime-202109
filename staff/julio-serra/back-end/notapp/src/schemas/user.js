const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  //para validar que sea un email correcto @
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = user