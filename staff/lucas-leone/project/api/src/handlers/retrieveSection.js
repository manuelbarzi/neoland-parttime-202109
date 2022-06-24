const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveSection } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId, sectionId }} = req

        retrieveSection(restaurantId, listId, sectionId)
            .then(section => res.status(200).json(section))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
