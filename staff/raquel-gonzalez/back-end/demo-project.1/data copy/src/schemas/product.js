const { Schema } = require("mongoose")

const product = new Schema({
    brand: {
        type: String,
        required: true,

    },
    model: {
        type: String,
        required: true,

    },
    sixe: {
        // type: String,
        type: Object,
        required: true,
        //enumrables, cuando quires poner varios datos
        //  enum: ["xs", "s", "m", "l", "xl"]
    },

    color: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
})