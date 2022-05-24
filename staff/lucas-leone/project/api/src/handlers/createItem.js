const { extractUserIdFromAuthorization } = require('./helpers')
const { createItem } = require('logic')

module.exports = (req, res) => {
    try {
        const restaurantId = extractUserIdFromAuthorization(req)

        const { body: {  name, categories, ingredients, allergens, price } } = req

        createItem(restaurantId, name, categories, ingredients, allergens, price)
           .then(itemId => {
    
            res.status(200).json({ itemId })
        })
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}