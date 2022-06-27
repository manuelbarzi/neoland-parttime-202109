const { retrieveUser } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {

        const id = extractUserIdFromAuthorization(req) // hacemos un split del authorization

        retrieveUser(id)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}