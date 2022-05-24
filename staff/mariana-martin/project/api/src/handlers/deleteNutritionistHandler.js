const { extractUserIdFromAuthorization } = require('./helpers')
const { deleteNutritionist } = require('logic')

module.exports = (req, res ) => {
    try {
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { body: { password }} = req 

        deleteNutritionist(nutritionistId, password)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
            res.status(400).json({ error: error.message})
        
    }
}