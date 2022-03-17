const { authenticateUser } = require('logic')

const { env: { JWT_SECRET } } = process

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(userId => res.status(200).json({ userId }))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}