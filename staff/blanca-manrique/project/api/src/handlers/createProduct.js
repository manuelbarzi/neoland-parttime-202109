const { extractUserIdFromAuthorization } = require('./helpers')
const { createProduct } = require('logic')
const { errors: { DuplicityError, NotFoundError, FormatError, AuthError } } = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice } } = req
        const userId = extractUserIdFromAuthorization(req)
        const { params: { supplierId } } = req

        createProduct(userId, supplierId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof DuplicityError)
                    status = 409

                else if (error instanceof NotFoundError)
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