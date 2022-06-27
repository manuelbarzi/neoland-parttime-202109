const { models: { User, MealPlan}} = require('data')
const { validators: { validateId} , errors: { NotFoundError, AuthError }} = require('commons')

function retrievePlanFromPatient(patientId){   

    validateId(patientId, 'patient id')
   

    return Promise.all([User.findById(patientId).lean(), MealPlan.findOne({patient:patientId}).lean()])
        .then(([patient, mealPlan]) => {
            
       
        if (!patient) throw new NotFoundError(`patient with id ${patientId} not found`)
        if (!mealPlan) throw new NotFoundError(`meal plan not found`)

        if (patient.role !== User.PATIENT)
            throw new AuthError(`cannot retrieve meal, user with id ${patientId} is not an patient`)
        
        // if (patient.nutritionist.toString() !== nutritionistId)
        //     throw new AuthError(`patient with id ${patientId} does not belong to nutritionist with id ${nutritionistId}`)

        // if (mealPlan.patient.toString() !== patientId)
        //     throw new AuthError(`meal with id does not belong to nutritionist with id ${nutritionistId}`)

            
            mealPlan.id = mealPlan._id.toString()
            delete mealPlan.__v

            return mealPlan
    
    
    })
}

module.exports = retrievePlanFromPatient