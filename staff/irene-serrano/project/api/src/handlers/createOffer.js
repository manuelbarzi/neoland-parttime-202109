const { extractUserIdFromAuthorization } = require('./helpers')
const { createOffer } = require('logic')

module.exports = (req, res) => {
    try {
        const companyId = extractUserIdFromAuthorization(req)

        const { body: { title, description, stack, minSalary, maxSalary, location } } = req

        createOffer(companyId, title, description, stack, minSalary, maxSalary, location)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}