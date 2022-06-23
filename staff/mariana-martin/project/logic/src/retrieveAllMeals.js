const { models: { User, Meal } } = require('data')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('commons')

function retrieveAllMeals(nutritionistId) {
    validateId(nutritionistId, 'nutritionist id')

    return User.findById(nutritionistId)
        .then(nutritionist => {
            if (!nutritionist) throw new NotFoundError(`nutritionist with ${nutritionistId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`cannot retrieve meals, user with id ${nutritionistId} is not an nutritionist`)

            return Meal.find({ nutritionist: nutritionistId }).lean().populate('nutritionist').sort('title')
        })
        .then(meals => {
            meals.forEach(meal => {
                meal.id = meal._id.toString()

                delete meal._id
                delete meal.__v

                meal.nutritionistId = meal.nutritionist._id.toString()
                meal.nutritionistName = meal.nutritionist.name

                delete meal.nutritionist
            })
            return meals
        })
}

module.exports = retrieveAllMeals