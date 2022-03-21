const { authenticateUser } = require('logic')
const { env: { JWT_SECRET } } = process
const { sign } = require('jsonwebtoken')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(id => {
                const token = sign({ sub: id }, JWT_SECRET)

                res.status(200).json({ token })
            })
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}