const { authenticateUser } = require('logic')
const { env: { JWT_SECRET, JWT_EXP } } = process
const { sign } = require('jsonwebtoken')
const { errors: { AuthError }} = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(userId => {
                const token = sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                res.status(200).json({ token })
            })
            .catch(error => {
                let status = 400

                if (error instanceof AuthError)
                    status = 401

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}