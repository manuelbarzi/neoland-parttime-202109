const { authenticateCompany } = require('logic')
const { env: JWT_SECRET, JWT_EXP } = process
const { sign } = require('jsonwebtoken')
const { errors: { AuthError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateCompany(email, password)
            .then(companyId => {
                const token = sign({ sub: companyId }, JWT_SECRET, { expiresIn: JWT_EXP })

                res.status(200).json({ token })
            })
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}