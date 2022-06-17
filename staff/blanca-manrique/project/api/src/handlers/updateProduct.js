const { extractUserIdFromAuthorization } = require('./helpers')
const { updateProduct } = require('logic')
const { errors: { NotFoundError, AuthError, FormatError, DuplicityError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { params: { supplierId, productId }, body: { supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice } } = req

        updateProduct(userId, supplierId, productId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice)
            .then(() => res.status(204).send())
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401
                
                else if (error instanceof NotFoundError)
                    status = 404
                
                else if (error instanceof DuplicityError)
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