const { models: {User, Meal} } = require('data')
const { validators: { validateId} , errors: { NotFoundError, AuthError }} = require('commons')


function retrieveMeal(nutritionistId, mealId){
    validateId(nutritionistId, 'nutritionist id')
    validateId(mealId, 'meal id')

    return Promise.all([User.findById(nutritionistId).lean(), Meal.findById(mealId).lean()])
        .then(([nutritionist, meal]) => {
            if (!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found`)
            if (!meal) throw new NotFoundError(`meal with id ${mealId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
            throw new AuthError(`cannot retrieve meal, user with id ${nutritionistId} is not an nutritionist`)

            meal.id = meal._id.toString() //convierto el id de meal a string
            delete meal.__v
            return meal

            
        })
    

}

module.exports = retrieveMeal