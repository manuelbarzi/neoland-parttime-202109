const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveUser } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        retrieveUser(userId)
            .then(user => req.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ errro: error.message })
    }
}