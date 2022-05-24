const { models: { Restaurant, Item } } = require('data')

const {
    validators: { validateId, validateString, validateArray, validateNumber },
    errors: { NotFoundError }
} = require('commons')

function createItem(restaurantId, name, categories, ingredients, allergens, price) {
    validateId(restaurantId, 'restaurant id')
    validateString(name, 'name')
    validateArray(categories, 'categories')
    validateArray(ingredients, 'ingredients')
    validateArray(allergens, 'allergens')
    validateNumber(price, 'price')

    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`Restaurant with id ${restaurantId} not found`)

            return Item.create({ restaurant: restaurantId, name, categories, ingredients, allergens, price })
        })
        .then(item => { return item.id })
}

module.exports = createItem