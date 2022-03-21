const { extractUserIdFromAuthorization } = require('./helpers')
const { findNotes } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { query: { q: query, color, date } } = req

        findNotes(userId, query, color, new Date(date))
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}