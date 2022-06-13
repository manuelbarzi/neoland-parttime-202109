const { models: { Restaurant, Category } } = require('data')


function retrieveCategory(restaurantId) {


    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`restaurant with id ${restaurantId} not found`)

            return Category.find({})
        })
        .then(categories => {
            categories.map(category =>{
                category.id = category._id.toString()

            delete category._id
            delete category.__v})


            return categories
        })

}




module.exports = retrieveCategory