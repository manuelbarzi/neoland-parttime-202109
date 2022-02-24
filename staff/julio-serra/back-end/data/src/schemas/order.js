/*
TODO 
stock (object id)
quantity (number)
date (new Date)
*/

const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const order = {
    stock = {
        type: ObjectId,
        ref: 'Stock',
        require: true
    },

    quantity = {
        type: Number,
        require: true
    },

    date = {
        type: Date,
        require: true
    }
}

module.exports = order
