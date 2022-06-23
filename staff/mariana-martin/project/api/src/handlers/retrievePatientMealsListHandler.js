const { extractUserIdFromAuthorization } = require('./helpers')
const { retrievePatientMealsList } = require('logic')

module.exports = (req, res) => {
    try {
        
        const patientId = extractUserIdFromAuthorization(req)

        retrievePatientMealsList(patientId)
            .then(meals => res.status(200).json(meals))
            .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}