const { extractUserIdFromAuthorization } = require('./helpers')
const { updateUser } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        
        const { body: { name, email, password } } = req

        updateUser(userId, name, email, password)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}