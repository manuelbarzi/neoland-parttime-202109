function Pizza(ingredients){
    this.gluten = true;
    this.extras = [];
    this.ingredients = [];
    this.price;
    
    for(var i = 0; i< arguments.length; i++){
        var element = arguments[i]

        this.ingredients[i] = element
    }
    this.ingredients.length = arguments.length

  
}