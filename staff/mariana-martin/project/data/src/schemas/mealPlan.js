const { Schema } = require('mongoose')
const meal = require('./meal')

const { Types: { ObjectId}} = Schema

const mealPlan = new Schema ({
    admin: {
        type: ObjectId,
        ref: 'Admin',
        required: true
    },
    patient: {
        type: ObjectId,
        ref: 'Patient',
        required: true
    },
    monday: [meal],
    tuesday: [meal],
    wednesday: [meal],
    thursday: [meal],
    friday: [meal],
    saturday: [meal],
    sunday: [meal],
    

})

module.exports = mealPlan