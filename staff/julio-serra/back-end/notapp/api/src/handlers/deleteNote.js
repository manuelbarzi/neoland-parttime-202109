const { deleteNote } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')


module.exports = (req, res) => {
    try {
        const id = extractUserIdFromAuthorization(req)
        const { params: { noteId } } = req

        deleteNote(id, noteId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}