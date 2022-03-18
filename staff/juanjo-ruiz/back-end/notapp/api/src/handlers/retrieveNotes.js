const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveNotes } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        retrieveNotes(userId, userId)
            .then(notes => res.status(200).json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}