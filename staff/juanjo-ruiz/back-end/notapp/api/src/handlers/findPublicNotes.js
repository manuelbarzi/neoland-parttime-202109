const { extractUserIdFromAuthorization } = require('./helpers')
const { findPublicNotes } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        findPublicNotes(userId)
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}