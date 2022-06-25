const { extractUserIdFromAuthorization } = require('./helpers')
const { updateOffer } = require('logic')

module.exports = (req, res) => {

    try {
        const companyId = extractUserIdFromAuthorization(req)

        const { params: { offerId }, body: { title, description, stack, minSalary, maxSalary, location } } = req

        updateOffer(companyId, offerId, title, description, stack, minSalary, maxSalary, location)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}