const { retrieveItem } = require('logic')
const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { itemId } } = req

        retrieveItem(restaurantId, itemId)
            .then(Item => res.status(200).json(Item))
            .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}