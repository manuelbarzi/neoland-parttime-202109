const { extractUserIdFromAuthorization } = require('../helpers')
const { addBookingToSpace } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { spaceId } } = req
        
        addBookingToSpace(userId, spaceId)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}