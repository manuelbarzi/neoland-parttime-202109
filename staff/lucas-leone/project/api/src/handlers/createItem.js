const { extractUserIdFromAuthorization } = require('./helpers')
const { createItem } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { params: { listId, sectionId }, body: { name, categories, ingredients, allergens, price } } = req

        createItem(restaurantId, listId, sectionId, name, categories, ingredients, allergens, price)
            .then(() => res.status(201).send())

            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}