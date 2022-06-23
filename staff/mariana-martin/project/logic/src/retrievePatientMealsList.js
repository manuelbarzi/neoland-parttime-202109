const { models: { User, Meal } } = require('data')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('commons')

function retrievePatientMealsList(patientId){
    validateId(patientId, 'patient id')

    return User.findById(patientId)
        .then(patient => {
            if (!patient) throw new NotFoundError(`patient with ${patientId} not found`)

            if (patient.role !== User.PATIENT)
                throw new AuthError(`cannot retrieve meals, user with id ${patientId} is not an patient`)

            return Meal.find({ patient: patientId }).lean().sort('title')
        })
        .then(meals => {
            meals.forEach(meal => {
                meal.id = meal._id.toString()

                delete meal._id
                delete meal.__v               
            })
        
            return meals
           
        })
        
}

module.exports = retrievePatientMealsList