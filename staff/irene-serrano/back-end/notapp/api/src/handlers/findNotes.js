const { extractUserIdFromAuthorization } = require('./helpers')
const { findNotes } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        findNotes(userId, filter)
        .then((notes) => res.json(notes))
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}