const { deleteBookingToSpace } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { spaceId, bookingId } } = req

        deleteBookingToSpace(userId, spaceId, bookingId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
   
        } catch (error) {
        res.status(400).json({ error: error.message })
    }
}