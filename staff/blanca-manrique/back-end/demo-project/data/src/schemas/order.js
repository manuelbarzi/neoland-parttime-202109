const {Schema} = require('mongoose')
const { Types: { ObjectID } } = Schema

const order = new Schema({
    stock:{
        type: ObjectID,
        ref: 'Stock',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date:{ //Fecha de compra
        type: Date,
        required: true
    }
})

module.exports = order