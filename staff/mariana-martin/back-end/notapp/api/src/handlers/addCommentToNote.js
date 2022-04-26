const { extractUserIdFromAuthorization } = require('./helpers')
const { addCommentToNote } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const {params: { noteId}, body: { text}} =req

        addCommentToNote(userId, noteId, text)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message})
        
    }
}