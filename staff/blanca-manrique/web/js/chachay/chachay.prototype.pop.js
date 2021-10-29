Chachay.prototype.pop = function() {
    var lastValue = undefined
    if (this.length !== 0) {
        var lastValue = this[this.length - 1]
        this.length = this.length-1
    }
    return lastValue
}
