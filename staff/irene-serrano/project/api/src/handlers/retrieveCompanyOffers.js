const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveCompanyOffers } = require('logic')

module.exports = (req, res) => {

    const userId = extractUserIdFromAuthorization(req)
    const { params: { companyId }} = req

    if (companyId !== userId) active = true 
    else active = null

    try {
        retrieveCompanyOffers(companyId, active)
            .then(offers => {
                res.json(offers)})
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
