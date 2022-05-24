const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveList } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId }} = req

        retrieveList(restaurantId, listId)
            .then(list => res.status(200).json(list))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}