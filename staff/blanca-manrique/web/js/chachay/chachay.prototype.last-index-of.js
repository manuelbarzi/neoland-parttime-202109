Chachay.prototype.lastIndexOf = function lastIndexOf(element, index) {
    for (var i = index ? (index < 0 ? this.length+index : index) : this.length - 1; i > 0; i--) {
        var item = this[i]

        if (item === element) {
            return i
        }
    }
    return -1
}