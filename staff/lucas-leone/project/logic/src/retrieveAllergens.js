const { models: { Restaurant, Allergen } } = require('data')


function retrieveCategory(restaurantId) {


    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`restaurant with id ${restaurantId} not found`)

            return Allergen.find({})
        })
        .then(allergens => {
            allergens.map(allergen =>{
                allergen.id = allergen._id.toString()

            delete allergen._id
            delete allergen.__v})


            return allergens
        })

}




module.exports = retrieveCategory