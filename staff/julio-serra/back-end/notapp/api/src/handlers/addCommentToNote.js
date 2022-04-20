const { addCommentToNote } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {
        const id = extractUserIdFromAuthorization(req)

        const { params: { noteId }, body: { text } } = req

        addCommentToNote(id, noteId, text)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
