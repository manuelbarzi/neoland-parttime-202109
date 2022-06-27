require('dotenv').config()
const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
//handlers:
const { registerNutritionistHandler, authenticateNutritionistHandler, retrieveNutritionistHandler, updateNutritionistHandler, deleteNutritionistHandler,
    createPatientHandler, authenticatePatientHandler, retrievePatientHandler, updatePatientHandler, retrieveAllPatientsHandler, deletePatientHandler,
    createMealHandler, retrieveMealHandler, updateMealHandler, retrieveAllMealsHandler, deleteMealHandler,
    addMealToPlanHandler, removeMealFromPlanHandler, retrieveMealPlanHandler, retrievePlanFromPatientHandler, retrievePatientMealsListHandler } = require('./handlers')


const { env: { MONGODB_URL, PORT } } = process


connect(MONGODB_URL)
    .then(() => {
        console.log('database (mongo) is connected')

        const api = express()

        api.use(cors()) //conecto 2 puertos

        const router = express.Router() //creo rutas

        const jsonBodyParser = express.json()

        //nutritionists routes:
        router.post('/nutritionist', jsonBodyParser, registerNutritionistHandler)
        router.post('/nutritionist/auth', jsonBodyParser, authenticateNutritionistHandler)
        router.get('/nutritionist', retrieveNutritionistHandler)
        router.patch('/nutritionist', jsonBodyParser, updateNutritionistHandler)
        router.delete('/nutritionist', jsonBodyParser, deleteNutritionistHandler)

        // patients route:  
        router.post('/patient', jsonBodyParser, createPatientHandler)
        router.post('/patient/auth', jsonBodyParser, authenticatePatientHandler)
        router.get('/patient', retrievePatientHandler) //paciente se recupera a el mismo (uso id que recibo del token)
        router.get('/patient/:patientId', retrievePatientHandler) //en params, si envío id soy admin recupera por id al patient (en la lógica, si no me envían el parametro patientId, significa que el paciente se quiere recuperar a el mismo)
        router.patch('/patient/:patientId', jsonBodyParser, updatePatientHandler)
        router.get('/patients', retrieveAllPatientsHandler)
        router.delete('/patient/:patientId', jsonBodyParser, deletePatientHandler)


        //meal routes, nutritionistid????:
        router.post('/meal', jsonBodyParser, createMealHandler)
        router.get('/meal/:mealId', retrieveMealHandler)
        router.patch('/meal/:mealId', jsonBodyParser, updateMealHandler)
        router.get('/meals', retrieveAllMealsHandler)
        router.delete('/meal/:mealId', jsonBodyParser, deleteMealHandler)

        //mealPlans routes:
        router.post('/patient/:patientId/mealPlan/meal/:mealId', jsonBodyParser, addMealToPlanHandler)
        router.get('/patient/:patientId/mealPlan', retrieveMealPlanHandler)
        router.get('/mealPlan/patient', retrievePlanFromPatientHandler) //El paciente recupera su plan
        router.get('/mealPlan/list', retrievePatientMealsListHandler) //El paciente recupera sus comidas para mostrar
        router.delete('/patient/:patientId/meal/:mealId', jsonBodyParser, removeMealFromPlanHandler)
      



        api.use('/api', router)

        api.listen(PORT, () => console.log(`server  is listening on port ${PORT}`))

    })
