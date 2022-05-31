const { extractUserIdFromAuthorization } = require('../helpers')
const { createSpace } = require('logic')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)

        const { body: { text, features } } = req

        createSpace(adminId, text, features)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}