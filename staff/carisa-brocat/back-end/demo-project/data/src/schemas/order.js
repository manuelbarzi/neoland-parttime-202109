/*
TODO implement me
properties
- stock (object id)
- quantity (number)
- date (date)
*/

const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const order = new Schema({
    stock: {
        type: ObjectId,
        ref: 'Stock',
        require: true
    },

    quantity: {
        type: Number,
        require: true
    },

    date: {
        type: Date,
        require: true
    }
})

module.exports = order