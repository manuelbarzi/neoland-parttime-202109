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
        required: true
    },
    color:{
        type: String,
        required: true
    },
    stockOnHand:{
        type: Number,
        required: true
    },
    criticalStock:{
        type: Number,
        required: true
    }
})

// variant.index({ product: 'sku', size: 'sku', color: 'sku' })

module.exports = variant