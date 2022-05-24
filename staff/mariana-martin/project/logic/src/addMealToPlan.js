const { models: { User, Meal, MealPlan } } = require('data')
const { validators: { validateId, validateDay, }, errors: { AuthError } } = require('commons')


function addMealToPlan(nutritionistId, patientId, day, mealId) {
    validateId(nutritionistId, 'nutritionist id')
    validateId(patientId, 'patient id')
    validateDay(day, 'day') // 'monday', 'tuesday', 'wednesday', ...
    validateId(mealId, 'meal id')

    return Promise.all([User.findById(nutritionistId), User.findById(patientId), Meal.findById(mealId)])
        .then(([nutritionist, patient, meal]) => {
            if (!nutritionist) throw new Error(`nutritionist with id ${nutritionistId} not found`)
            if (!patient) throw new Error(`patient with id ${patientId} not found`)
            if (!meal) throw new Error(`meal with id ${mealId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`cannot create a meal plan, user with id ${userId} is not an nutritionist`)

            if (patient.nutritionist.toString() !== nutritionistId)
                throw new AuthError(`patient with id ${patientId} does not belong to nutritionist with id ${nutritionistId}`)

            if (meal.nutritionist.toString() !== nutritionistId)
                throw new AuthError(`meal with id ${mealId} does not belong to nutritionist with id ${nutritionistId}`)

            return MealPlan.findOne({ patient: patientId })  //busco si hay meal plan, si no existe, lo creo...
        })
        .then(mealPlan => {  //recibirías el mealplan si está en base de datos
            if (!mealPlan)  //si no encuentras mealplan ->
                mealPlan = new MealPlan({ patient: patientId }) //hago un nuevo mealplan y la 1era vez, me hará array vacíos y aquí todavía no está en base de datos, sólo en memoria

            mealPlan[day].push(mealId)  //al day que me han pasado arriba (x arggumento) a la propiedad day del objeto mealPlan, si el day es igual a monday elijo la propiedad monday del schema, ahora su agrego el meal al day

            return mealPlan.save() //lo salvas para que se quede en base de datos
        })
        .then(() => {}) //no devuelvo nada, va todo bien
}

module.exports = addMealToPlan

//no se uso createMeal plan, porque se creearía mealPlans cada vez, y lo que quiero es añadir comidas al plan, por eso push al array