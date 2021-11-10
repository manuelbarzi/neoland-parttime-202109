Pizza.prototype.resume = function(){
    var ingredientList = this.ingredients
    var isGlutenFree = this.gluten === false? "gluten free " : ""
    var extrasCount = this.extras.length

    var resume = "🍕 You ordered a " + isGlutenFree + "pizza with the following ingredients: " + ingredientList + " and " + extrasCount + " extras. 🍕" 

    message(resume)
}