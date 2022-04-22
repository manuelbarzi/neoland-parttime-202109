const { extractUserIdFromAuthorization } = require('./helpers')


module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { ownerId } } = req

        retrievePublicNotesFromUser(userId, ownerId)
            .then(notes => res.status(200).json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}