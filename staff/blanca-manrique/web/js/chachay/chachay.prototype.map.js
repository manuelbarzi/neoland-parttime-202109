Chachay.prototype.map = function(callback) {
    var newArray = []
    for (var i = 0; i < this.length; i++){
        var value = this[i]
        newArray[i] = callback(value, i, this)
    }
    return newArray
}