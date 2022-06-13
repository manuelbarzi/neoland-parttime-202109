const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveIngredients } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        retrieveIngredients(restaurantId)
            .then(ingredients => res.status(200).json(ingredients))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}