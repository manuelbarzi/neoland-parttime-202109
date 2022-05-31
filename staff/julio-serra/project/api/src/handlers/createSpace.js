const { extractUserIdFromAuthorization } = require('../helpers')
const { createSpace } = require('logic')

module.exports = (req, res) => {
    try {
        const adminId = extractUserIdFromAuthorization(req)

        const { body: { title, description, features, price, typeDetail, depositDetail, sizeDetail, accessDetail, image } } = req

        createSpace(adminId, title, description, price, features, typeDetail, depositDetail, sizeDetail, accessDetail, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}