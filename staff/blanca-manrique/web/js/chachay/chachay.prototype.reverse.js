Chachay.prototype.reverse = function() {
    var reverted = []
    var j = 0
    debugger
    for( var i=this.length - 1; i>=0; i--){
        reverted[j] = this[i]
        j++
    }
    return reverted
}
