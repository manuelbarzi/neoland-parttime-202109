const { retrieveSpace } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)

        const { params: { spaceId } } = req

        retrieveSpace(adminId, spaceId)
            .then(space => res.status(200).json(space))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {

        res.status(400).json({ error: error.message })
    }
}