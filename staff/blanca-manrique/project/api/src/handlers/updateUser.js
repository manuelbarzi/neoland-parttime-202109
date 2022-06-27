const { extractUserIdFromAuthorization } = require('./helpers')
const { updateUser } = require('logic')
const { errors: { FormatError, DuplicityError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { body: { username, email, password } } = req

        updateUser(userId, username, email, password)
            .then(() => res.status(204).send())
            .catch(error => {
                let status = 500

                if (error instanceof DuplicityError)
                    status = 409

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}