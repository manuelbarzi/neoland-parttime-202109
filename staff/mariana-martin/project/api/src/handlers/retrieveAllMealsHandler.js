const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveAllMeals } = require('logic')

module.exports = (req, res) => {
    try {
        
        const nutritionistId = extractUserIdFromAuthorization(req)

        retrieveAllMeals(nutritionistId)
            .then(meals => res.status(200).json(meals))
            .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}