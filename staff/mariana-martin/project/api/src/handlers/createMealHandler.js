const { extractUserIdFromAuthorization } = require('./helpers')
const { createMeal } = require('logic')

module.exports = (req, res) => {
    try {

        const nutritionistId = extractUserIdFromAuthorization(req)

        const { body: { title, description, image } } = req
        
        createMeal(nutritionistId, title, description, image)
            .then(() => res.status(201).send() )
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
}