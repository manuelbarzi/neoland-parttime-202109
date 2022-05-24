
const registerNutritionist = require('./registerNutritionist')
const authenticateNutritionist = require('./authenticateNutritionist')
const retrieveNutritionist = require('./retrieveNutritionist')
const updateNutritionist = require('./updateNutritionist')
const deleteNutritionist =require('./deleteNutritionist')

const createPatient = require('./createPatient')
const authenticatePatient = require('./authenticatePatient')
const retrievePatient = require('./retrievePatient')
const updatePatient = require('./updatePatient')
const retrieveAllPatients = require('./retrieveAllPatients')
const deletePatient = require('./deletePatient')

const createMeal = require('./createMeal')
const retrieveMeal = require('./retrieveMeal')
const updateMeal = require('./updateMeal')
const retrieveAllMeals = require('./retrieveAllMeals')
const deleteMeal = require('./deleteMeal')

const addMealToPlan = require('./addMealToPlan')
const removeMealFromPlan = require('./removeMealFromPlan')
const retrieveMealPlan = require('./retrieveMealPlan')

module.exports = {
    registerNutritionist,
    authenticateNutritionist,
    retrieveNutritionist,
    updateNutritionist,
    deleteNutritionist,

    createPatient,
    authenticatePatient,
    retrievePatient,
    updatePatient,
    retrieveAllPatients,
    deletePatient,

    createMeal,
    retrieveMeal,
    updateMeal,
    retrieveAllMeals, 
    deleteMeal,

    addMealToPlan,
    removeMealFromPlan, 
    retrieveMealPlan
}