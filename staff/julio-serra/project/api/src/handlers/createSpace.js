const { extractUserIdFromAuthorization } = require('../helpers')
const { createSpace } = require('logic')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)

        const { body: { title, description, features, price, type, deposit, size, access, image } } = req

        createSpace(adminId, title, description, price, features, type, deposit, size, access, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}