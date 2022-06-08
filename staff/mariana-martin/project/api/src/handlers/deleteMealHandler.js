const { extractUserIdFromAuthorization } = require('./helpers')
const { deleteMeal } = require('logic')

module.exports = (req, res ) => {
    try {
        
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { params: { mealId } } = req

        deleteMeal(nutritionistId, mealId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message}))

    } catch (error) {

        res.status(400).json({error:error.message})
        
    }
}