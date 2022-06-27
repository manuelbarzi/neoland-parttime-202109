const { models: { User, Meal } } = require('data')
const { validators: { validateId, validateString }, errors: { NotFoundError, AuthError } } = require('commons')

function updateMeal(nutritionistId, mealId, title, description, image) {
    validateId(nutritionistId, 'nutritionist id')
    validateId(mealId, 'meal id')
    validateString(title, 'title')
    validateString(description, 'description')

    return Promise.all([User.findById(nutritionistId), Meal.findById(mealId)])
        .then(([nutritionist, meal]) => {
            if (!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`cannot create meal, user with id ${nutritionistId} is not an nutritionist`)

                //la propiedad nutritionist de meal, la hago string y comparo con el id del nutri
            if (meal.nutritionist.toString() !== nutritionistId) throw new AuthError(`meal with id ${mealId} does not belong to user with nutritionist id ${nutritionistId}`)

            return Meal.updateOne({ user: nutritionist, _id: mealId }, { title, description, image })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new Error(`meal with id ${mealId} not found`)
                })
              
        })
}

module.exports = updateMeal