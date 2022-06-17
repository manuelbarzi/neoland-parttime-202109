const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveAllProductsFromSupplier } = require('logic')
const { errors: { NotFoundError, FormatError, AuthError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { supplierId } } = req

        retrieveAllProductsFromSupplier(userId, supplierId)
            .then(products => {
                if (products.length === 0) {
                    res.status(404).json({ error: error.message })
                }

                res.status(200).json(products)

            })
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401

                if (error instanceof NotFoundError)
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