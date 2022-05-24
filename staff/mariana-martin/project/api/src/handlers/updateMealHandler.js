const { extractUserIdFromAuthorization } = require('./helpers')
const { updateMeal } = require('logic')


module.exports = (req, res) => {
    try {
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { params: { mealId }, body: { title, description, image } } = req

        updateMeal(nutritionistId, mealId, title, description, image)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}