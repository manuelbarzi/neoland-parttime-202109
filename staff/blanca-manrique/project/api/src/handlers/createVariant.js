const { extractUserIdFromAuthorization } = require('./helpers')
const { createVariant } = require('logic')
const { errors: { NotFoundError, FormatError, DuplicityError, AuthError } } = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { size, color, stockOnHand, criticalStock } } = req
        const userId = extractUserIdFromAuthorization(req)
        const { params: { supplierId, productId } } = req

        createVariant(userId, supplierId, productId, size, color, stockOnHand, criticalStock)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404

                else if (error instanceof DuplicityError)
                    status = 409

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
