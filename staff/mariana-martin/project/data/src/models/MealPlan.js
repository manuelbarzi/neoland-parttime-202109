const { model } = require('mongoose')
const { mealPlan } = require('../schemas')

const MealPlan = model('MealPlan', mealPlan)
                        //NOMBRE de la collection
module.exports = MealPlan