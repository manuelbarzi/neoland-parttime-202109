Chachay.prototype.filter = function(callback){
    var newArray = []
    for(var i = 0; i<this.length; i++){
        var element = this[i]

        if (callback(element, i, this)){
            newArray[newArray.length] = element
        }
    }
    return newArray
}