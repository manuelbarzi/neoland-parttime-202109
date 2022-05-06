const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const variant = new Schema({
    product:{
        type: ObjectId,
        ref: 'Product',
        required: true
    },
    size:{
        type: String,
        require: true
    },
    color:{
        type: String,
        require: true
    },
    stockOnHand:{
        type: Number,
        require: true
    },
    criticalStock:{
        type: Number,
        require: true
    }
})
module.exports = variant