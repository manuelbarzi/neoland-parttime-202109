const { extractUserIdFromAuthorization } = require('./helpers')
const { createPatient } = require('logic')



module.exports = (req, res ) => {
    try {
        const nutritionistId = extractUserIdFromAuthorization(req) //extraigo id del token de nutri para usarlo en createPatient

        const { body : { name, email, password, age, weight, height, measures, goal }} = req
                   //importante orden de los parametros al enviar argumentos
        createPatient(nutritionistId, name, email, password,  age, weight, height, measures, goal)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
            res.status(400).json({ error: error.message})
        
    }
}