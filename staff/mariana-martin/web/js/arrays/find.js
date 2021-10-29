function find(array, callback) {

    for (var i = 0; i < array.length; i++) {
        var currentElement = array[i]

        if (callback(currentElement)) {
            return currentElement
        } else {
            currentElement = undefined
        }
    }
}


