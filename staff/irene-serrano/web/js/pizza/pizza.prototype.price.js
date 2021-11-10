Pizza.prototype.price = function(){
    var ingredientCount = this.ingredients.length
    var extrasCount = this.extras.length
    var price = ingredientCount + (extrasCount * 2);
    this.price = price;
    var priceMsg = "💰 The price for your pizza is " + price +"$ 💰"

    message(priceMsg)
}