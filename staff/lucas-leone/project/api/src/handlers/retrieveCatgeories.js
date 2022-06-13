const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveCategories } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        retrieveCategories(restaurantId)
            .then(categories => res.status(200).json(categories))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
