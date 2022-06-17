const { extractUserIdFromAuthorization } = require('./helpers')
const { findSuppliers } = require('logic')
const { errors: { NotFoundError, FormatError, AuthError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { query: { q } } = req

        findSuppliers(userId, q)
            .then(suppliers => {
                if (suppliers.length === 0) {
                    res.status(404).json({ error: error.message })
                }

                res.status(200).json(suppliers)
            })
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404

                else if (error instanceof AuthError)
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