const { extractUserIdFromAuthorization } = require('./helpers')
const { activateOffer } = require('logic')

module.exports = (req, res) => {
   
    try {
        const companyId = extractUserIdFromAuthorization(req)

        const { params: { offerId }} = req

        activateOffer(companyId, offerId)
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
        res.status(400).json({ error: error.message })
    }
}