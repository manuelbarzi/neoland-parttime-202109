//importo herramienta esquema de caja mongoose
//importa herramineta objectId de la caja Schema

const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


const comment = new Schema ({
    
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

   
    text: {
        type: String, 
        required: true
    }

})

module.exports = comment
