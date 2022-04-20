const { retrieveNotes} = require('logic')
const {extractUserIdFromAuthorization} = require('../helpers')

module.exports = (req, res) => {
    try {
        const id = extractUserIdFromAuthorization(req)

        retrieveNotes(id)
            .then(notes => res.status(200).json(notes))
            .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}