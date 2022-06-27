const { deleteSpace } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)
       
        const { params: { spaceId } } = req

        deleteSpace(adminId, spaceId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}