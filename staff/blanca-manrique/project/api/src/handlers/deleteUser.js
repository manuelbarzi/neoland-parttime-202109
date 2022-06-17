const { extractUserIdFromAuthorization } = require('./helpers')
const { deleteUser } = require('logic')
const { errors: { NotFoundError, AuthError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { body: { password } } = req

        deleteUser(userId, password)
            .then(() => res.status(204).send())
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401

                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}