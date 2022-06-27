const { Schema } = require('mongoose')
const meal = require('./meal')

const { Types: { ObjectId}} = Schema

const mealPlan = new Schema ({
    patient: {
        type: ObjectId,
        ref: 'Patient',
        required: true
    },
    monday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    tuesday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    wednesday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    thursday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    friday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    saturday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    sunday: [{
        type: ObjectId,
        ref: 'Meal'
    }],
    

})

module.exports = mealPlan