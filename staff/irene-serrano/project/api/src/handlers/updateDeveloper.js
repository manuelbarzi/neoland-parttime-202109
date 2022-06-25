const { extractUserIdFromAuthorization } = require('./helpers')
const { updateDeveloper } = require('logic')

module.exports = (req, res) => {


    try {
        const developerId = extractUserIdFromAuthorization(req)
        
        const { body: { name, description,  stack, location, link } } = req

        updateDeveloper(developerId, name, description,  stack, location, link)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 