const { extractUserIdFromAuthorization } = require('./helpers')
const { retrievePublicNotesFromUser } = require('logic')

module.exports = (req, res) => {
    try {
        const { params: { ownerId } } = req
        const userId = extractUserIdFromAuthorization(req)

        retrievePublicNotesFromUser(userId, ownerId)
            .then(notes => res.status(200).json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}