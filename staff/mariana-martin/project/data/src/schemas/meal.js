const { Schema } = require('mongoose')
const { Types: {ObjectId}} = Schema


const meal = new Schema({
   
    title: {
        type: String,
        required: true
    },
   description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

module.exports = meal