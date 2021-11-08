Chachay.prototype.find = function (callback) {

    for (var i = 0; i < this.length; i++) {
        var currentElement = this[i]

        if (callback(currentElement)) {
            return currentElement
        } else {
            currentElement = undefined
        }
    }
}


