Chachay.prototype.indexOf = function(element, index){
    for (var i = index ? index : 0; i < this.length; i++) {
        var item = this[i]

        if (item === element)
            return i
    }

    return -1

}