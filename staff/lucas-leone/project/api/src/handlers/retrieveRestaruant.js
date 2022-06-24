const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveRestaurant } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        retrieveRestaurant(restaurantId)
            .then(restaurant => res.status(200).json(restaurant))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}