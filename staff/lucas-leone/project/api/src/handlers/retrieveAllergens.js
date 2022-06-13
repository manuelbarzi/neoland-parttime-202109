const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveAllergens } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        retrieveAllergens(restaurantId)
            .then(allergens => res.status(200).json(allergens))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
