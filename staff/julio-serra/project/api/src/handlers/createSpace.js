const { extractUserIdFromAuthorization } = require('../helpers')
const { createSpace } = require('logic')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)

        const { body: { title, description, features, oldPrice, price, type, deposit, size, time, access, image } } = req

        createSpace(adminId, title, description, oldPrice, price, features, type, deposit, size, time, access, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}