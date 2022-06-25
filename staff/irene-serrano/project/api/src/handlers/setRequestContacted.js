const { setRequestContacted } = require('logic')

const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    try {
        const companyId = extractUserIdFromAuthorization(req)
        const { params: { offerId, requestId } } = req

        setRequestContacted (companyId, offerId, requestId )
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}