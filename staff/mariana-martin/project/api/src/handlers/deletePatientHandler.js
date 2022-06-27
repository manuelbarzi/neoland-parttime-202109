const { extractUserIdFromAuthorization } = require('./helpers')
const {  deletePatient } = require('logic')

module.exports = (req, res ) => {
    try {
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { body: { password }} = req

        const { params: { patientId }} = req

        deletePatient(nutritionistId, password, patientId)
        .then(() => res.status(204).send())
        .catch(error => res.status(400).json({ error: error.message}))

    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
}