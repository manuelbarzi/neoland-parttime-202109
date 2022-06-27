const { extractUserIdFromAuthorization } = require('./helpers')
const { updateNutritionist } = require('logic')

module.exports = (req, res ) => {
    try {
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { body: { name, email, password }} = req

        updateNutritionist(nutritionistId, name, email, password )
        .then(() => res.status(204).send())
        .catch(error => res.status(400).json({ error: error.message }))
} catch (error) {
    res.status(400).json({ error: error.message })
}
}