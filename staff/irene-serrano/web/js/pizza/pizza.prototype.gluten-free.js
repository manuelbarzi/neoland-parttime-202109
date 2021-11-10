Pizza.prototype.glutenFree = function (arg) {
    if(arguments[0] === 'yes' || arguments[0] === 'Yes' ) return this.gluten = false
    else return this.gluten = true

}