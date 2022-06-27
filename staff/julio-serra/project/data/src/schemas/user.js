const { Schema } = require('mongoose')

const user = new Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // validamos que sea un mail correcto @.com
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

module.exports = user