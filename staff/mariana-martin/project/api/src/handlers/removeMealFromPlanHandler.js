const { removeMealFromPlan } = require('logic')
const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    try {
        
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { params: { patientId, mealId }, body: { day  }} = req 

        removeMealFromPlan(nutritionistId, patientId, day, mealId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
}