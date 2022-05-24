const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveItems } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        retrieveItems(restaurantId)
            .then(Items => res.status(200).json(Items))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}