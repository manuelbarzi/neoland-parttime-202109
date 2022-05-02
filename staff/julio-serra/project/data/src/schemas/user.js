const { Schema } = require('mongoose')
const { type: { ObjectId } } = Schema

// Id(objectId), name, email, password
const user = new Schema({
    id: {
        type: ObjectId,
        text: required
    },
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
        type: Image,
        required: true
    }
})

module.exports = user