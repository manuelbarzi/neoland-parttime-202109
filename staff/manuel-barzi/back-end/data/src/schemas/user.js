const { Schema } = require('mongoose')

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
    },
    /*
    TODO
    - creditCards ([creditCard])
    HINT https://mongoosejs.com/docs/subdocs.html
    HINT https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html
    */
})

module.exports = user