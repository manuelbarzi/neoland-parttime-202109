const { extractUserIdFromAuthorization } = require('./helpers')
const { addOfferRequest } = require('logic')

module.exports = (req, res) => {
    try {
        const developerId = extractUserIdFromAuthorization(req)

        const { params: { offerId } } = req

        addOfferRequest (offerId, developerId )
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}