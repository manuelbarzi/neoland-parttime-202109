const { models: { Restaurant, Ingredient } } = require('data')
const { ingredient } = require('data/src/schemas')


function retrieveIngredients(restaurantId) {


    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`restaurant with id ${restaurantId} not found`)

            return Ingredient.find().lean()
        })
        .then(ingredients => {
            ingredients.forEach(ingredient =>{
                ingredient.id = ingredient._id.toString()

            delete ingredient._id
            delete ingredient.__v})


            return ingredients
        })

}




module.exports = retrieveIngredients