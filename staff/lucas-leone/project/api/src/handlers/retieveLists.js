const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveLists } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        retrieveLists(restaurantId)
            .then(lists => res.status(200).json(lists))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}