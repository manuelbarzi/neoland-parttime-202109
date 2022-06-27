const { models: { User, Meal, MealPlan } } = require('data')
const { validators: { validateId, validateDay }, errors: { AuthError, NotFoundError } } = require('commons')



function removeMealFromPlan(nutritionistId, patientId, day, mealId) {
    // TODO use splice to remove mealId from mealPlan[day] array
    validateId(nutritionistId, 'nutritionist id')
    validateId(patientId, 'patient id')
    validateDay(day, 'day')
    validateId(mealId, 'meal id')

    return Promise.all([User.findById(nutritionistId), User.findById(patientId), Meal.findById(mealId)])
        .then(([nutritionist, patient, meal]) => {
            if (!nutritionist) throw new Error(`nutritionist with id ${nutritionistId} not found`)
            if (!patient) throw new Error(`patient with id ${patientId} not found`)
            if (!meal) throw new Error(`meal with id ${mealId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`cannot create a meal plan, user with id ${userId} is not an nutritionist `)

            if (patient.nutritionist.toString() !== nutritionistId)
                throw new AuthError(`patient with id ${patientId} does not belong to nutritionist with id ${nutritionistId}`)

            if (meal.nutritionist.toString() !== nutritionistId)
                throw new AuthError(`meal with id ${mealId} does not belong to nutritionist with id ${nutritionistId}`)


            return MealPlan.findOne({ patient: patientId })
        })
        .then(mealPlan => {

            // const dayMealToDelete = mealPlan.find(selectedDay => selectedDay === day)

            // if ( dayMealToDelete !== day ) throw new Error(`day does not match`)

            // const mealIdToDelete = mealPlan[day].find(mealDayId => mealDayId === mealId)

            mealPlan[day].splice(mealId, 1)

            return mealPlan.save()



        })
        .then(() => { })
}

module.exports = removeMealFromPlan