

const { models: { Restaurant, Item, Category, Allergen, Ingredient } } = require('data')


function retrieveItem(restaurantId, itemId) {


    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`restaurant with id ${restaurantId} not found`)

            return Item.findById(itemId).populate('categories').populate('allergens').populate('ingredients')
                .then(item => {
                    return item
                })
        }

        )
}
module.exports = retrieveItem