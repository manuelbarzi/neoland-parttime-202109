const { models: { User, Meal } } = require('data')
const { validators: { validateId, validatePassword }, errors: { AuthError } } = require('commons')
const bcrypt = require('bcryptjs')


function deleteMeal(nutritionistId, password,  mealId) {
    validateId(nutritionistId, 'nutritionist id')
    validatePassword(password)
    validateId(mealId, 'meal id')

    return User.findById(nutritionistId)
        .then(nutritionist => {
            if (!nutritionist) throw new Error(`nutritionist with id ${nutritionistId} not found`)


            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`cannot delete, user with id ${nutritionistId} is not an nutritionist`)

            return bcrypt.compare(password, nutritionist.password)
            })
              .then(match => {
                 if (!match) throw new AuthError('wrong crdentials')


            return Meal.findById(mealId)

                .then(meal => {
                    if (!meal) throw new Error(`meal with id ${mealId} not found`)

                    if (meal.nutritionist.toString() !== nutritionistId) throw new Error(`meal with id ${mealId} does not fit with ${nutritionistId}`)

                    return Meal.deleteOne({ _id: mealId })
                })
        })

        .then(result => { })

}

module.exports = deleteMeal