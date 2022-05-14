const { extractUserIdFromAuthorization } = require('../helpers')
const { createReview } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { body: { text, score } } = req

        createReview(userId, spaceId, text, score)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}