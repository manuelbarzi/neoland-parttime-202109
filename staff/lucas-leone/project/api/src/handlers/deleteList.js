const { deleteList } = require('logic')
const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId } } = req

        deleteList(restaurantId, listId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }}