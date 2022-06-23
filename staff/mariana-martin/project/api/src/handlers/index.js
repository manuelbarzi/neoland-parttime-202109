const registerNutritionistHandler = require('./registerNutritionistHandler')
const authenticateNutritionistHandler = require('./authenticateNutritionistHandler')
const retrieveNutritionistHandler = require('./retrieveNutritionistHandler')
const updateNutritionistHandler = require('./updateNutritionistHandler')
const deleteNutritionistHandler = require('./deleteNutritionistHandler')

const createPatientHandler = require('./createPatientHandler')
const authenticatePatientHandler = require('./authenticatePatientHandler')
const retrievePatientHandler = require('./retrievePatientHandler')
const updatePatientHandler = require('./updatePatientHandler')
const retrieveAllPatientsHandler = require('./retrieveAllPatientsHandler')
const deletePatientHandler = require('./deletePatientHandler')

const createMealHandler =require('./createMealHandler')
const retrieveMealHandler = require('./retrieveMealHandler')
const updateMealHandler = require('./updateMealHandler')
const retrieveAllMealsHandler = require('./retrieveAllMealsHandler')
const deleteMealHandler = require('./deleteMealHandler')

const addMealToPlanHandler = require('./addMealToPlanHandler')
const removeMealFromPlanHandler = require('./removeMealFromPlanHandler')
const retrieveMealPlanHandler = require('./retrieveMealPlanHandler')
const retrievePlanFromPatientHandler = require('./retrievePlanFromPatientHandler')

module.exports = {
    registerNutritionistHandler,
    authenticateNutritionistHandler,
    retrieveNutritionistHandler, 
    updateNutritionistHandler,
    deleteNutritionistHandler,

    createPatientHandler,
    authenticatePatientHandler,
    retrievePatientHandler,
    updatePatientHandler,
    retrieveAllPatientsHandler,
    deletePatientHandler,


    createMealHandler, 
    retrieveMealHandler,
    updateMealHandler,
    retrieveAllMealsHandler,
    deleteMealHandler,

    addMealToPlanHandler,
    removeMealFromPlanHandler, 
    retrieveMealPlanHandler,
    retrievePlanFromPatientHandler
}