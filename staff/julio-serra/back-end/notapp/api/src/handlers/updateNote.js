const { updateNote } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {
        const id = extractUserIdFromAuthorization(req)
        const { params: { noteId }, body: { color, public, text } } = req

        updateNote(id, noteId, color, public, text)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}