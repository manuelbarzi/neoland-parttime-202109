Chachay.prototype.indexOf = function (element, index) {
    debugger
    for (var i = index ? (index < 0 ? this.length + index : index) : 0; i < this.length; i++) {
        var item = this[i]

        if (item === element) {
            return i
        }
        this.length++
    }

    return -1
}