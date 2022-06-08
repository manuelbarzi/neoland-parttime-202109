//indexo y exporto lógicas
import registerNutritionist from './registerNutritionist'
import authenticateNutritionist from './authenticateNutritionist'
import retrieveNutritionist from './retrieveNutritionist'
import retrieveAllPatients from './retrieveAllPatients'

import createPatient from './createPatient'
import authenticatePatient from './authenticatePatient'
import retrievePatient from './retrievePatient'
import updatePatient from './updatePatient'

import createMeal from './createMeal'
import retrieveAllMeals from './retrieveAllMeals'
import deleteMeal from './deleteMeal'

export {
    registerNutritionist,
    authenticateNutritionist,
    retrieveNutritionist,
    retrieveAllPatients,

    createPatient,
    authenticatePatient,
    retrievePatient,
    updatePatient,

    createMeal,
    retrieveAllMeals,
    deleteMeal
}