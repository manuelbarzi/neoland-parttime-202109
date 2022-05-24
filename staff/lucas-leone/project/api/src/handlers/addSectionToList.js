const { extractUserIdFromAuthorization } = require('./helpers')
const { addSectionToList } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId }, body: { name, items } } = req

        addSectionToList(restaurantId, listId, name, items)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}