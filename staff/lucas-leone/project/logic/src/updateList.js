const { models: { Restaurant, List } } = require('data')


function updateList(restaurantId, listId, name, description, image, price) {


    return Promise.all([Restaurant.findById(restaurantId), List.findById(listId)])
        .then(([restaurant, list]) => {
            if (!restaurant) throw new NotFoundError(`restaurant with id ${restaurantId} not found`)
            if (!list) throw new NotFoundError(`list with id ${listId} not found`)

            if (list.restaurant.toString() !== restaurantId) throw new AuthError(`list with id ${listId} does not belong to user with id ${userId}`)

            list.name = name
            list.description = description
            list.price = price
            list.image = image

            return list.save()
        })
        .then(list => { })
}

module.exports = updateList