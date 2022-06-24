const { extractUserIdFromAuthorization } = require('./helpers')
const { addSectionToList } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId }, body: { name } } = req

        addSectionToList(restaurantId, listId, name)
            .then(sectionId => {
                res.status(200).json({ sectionId })
            })
            
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}