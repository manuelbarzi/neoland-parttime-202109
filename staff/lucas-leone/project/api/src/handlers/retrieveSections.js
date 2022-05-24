const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveSections } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId }} = req

        retrieveSections(restaurantId, listId)
            .then(sections => res.status(204).json({sections}))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
