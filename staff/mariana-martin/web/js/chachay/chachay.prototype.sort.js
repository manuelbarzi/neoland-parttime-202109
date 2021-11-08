
Chachay.prototype.sort = function(callback) {
    for (var i = 0; i < this.length - 1; i++) {
        var min = this[i], k = i

        for (var j = i + 1; j < this.length; j++) {
            var current = this[j]

            if (callback? callback(current, min) < 0 : current + '' < min + '') {
                k = j

                min = current
            }

            // count++
        }

        if (k !== i) {
            var temp = this[i]

            this[i] = this[k]
            this[k] = temp
        }

    }

    //console.log('count', count)

    return this
}