const { extractUserIdFromAuthorization} = require('./helpers')
const { retrieveAllPatients } = require('logic')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)

        retrieveAllPatients(adminId)
            .then(patients => res.json(patients))
            .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}