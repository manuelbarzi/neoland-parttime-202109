const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveVariant } = require('logic')
const { errors: { NotFoundError, FormatError, AuthError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { supplierId, productId, variantId } } = req

        retrieveVariant(userId, supplierId, productId, variantId)
            .then(variants => res.status(200).json(variants))
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