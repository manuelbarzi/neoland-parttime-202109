const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const request = new Schema({
       
        developer: {
            type: ObjectId,
            required: true,
            ref: 'User'
        },

        seen: {
            type: Boolean,
            required: true,
            default: false
        },
        contacted: {
            type: Boolean,
            required: true,
            default: false
        },
        rejected:{
            type: Boolean,
            required: true,
            default: false
        }
    })

module.exports = request 