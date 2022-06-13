const { models: { Restaurant, Item } } = require('data')
const {
    validators: { validateId, validateArray },
    errors: { NotFoundError }
} = require('commons')


function retrieveItemsFromList(restaurantId, items) {

    validateId(restaurantId, 'restaurant id')
    validateArray(items, 'items')

    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`restaurant with id ${restaurantId} not found`)

            return Item.find({
                '_id': { $in: items }

            }).lean()  
        })
        .then(items => {

            items.forEach(item => {
                item.id = item._id.toString()

                delete item._id
                delete item.__v

            })

            return items

        })


}

module.exports = retrieveItemsFromList 