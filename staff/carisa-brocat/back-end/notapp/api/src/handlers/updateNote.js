const { extractUserIdFromAuthorization } = require('./helpers')
const { updateNote } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { noteId }, body: { text, color, public } } = req

        updateNote(userId, noteId, text, color, public)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
