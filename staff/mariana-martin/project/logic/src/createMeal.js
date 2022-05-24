const { models: { User, Meal }} = require('data')
const { validators: { validateString, validateId}, errors: {NotFoundError, AuthError, DuplicityError}} =require('commons')


function createMeal(nutritionistId, title, description, image){
    validateId(nutritionistId, 'nutritionist id')
    validateString(title, 'title')
    validateString(description, 'description')

    return User.findById(nutritionistId)
        .then(nutritionist => {
            if (!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`cannot create meal, user with id ${nutritionistId} is not an nutritionist`)

            return Meal.findOne({ nutritionistId, title, description, image})
                .then(meal => {
                    if (meal) throw new DuplicityError(`duplicated meal, nutritionist id ${nutritionistId},title ${title} and description ${description} already exists`)
               
                    return Meal.create({ nutritionist: nutritionistId, title, description, image})
                })
        })
        .then(meal => { })
   

}

module.exports = createMeal