const { extractUserIdFromAuthorization } = require('./helpers')
const { createList } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { body: { name, description } } = req

        createList(restaurantId, name, description)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}