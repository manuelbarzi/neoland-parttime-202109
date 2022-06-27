const { extractUserIdFromAuthorization } = require('./helpers')
const { updatePatient } = require('logic')

module.exports = (req, res )=> {
    try {
        
        const nutritionistId = extractUserIdFromAuthorization(req) //extraigo id de token de nutri

        const { params: { patientId }, body: { name, email, password, age, weight, height, measures, goal}} = req

        updatePatient(nutritionistId, patientId, name, email, password, age, weight, height, measures, goal)
            .then(() => res.status(204).send())
            .catch(error => res.status(204).json({error: error.message}))
    } catch (error) {
            res.status(400).json({error:error.message})
    }

}