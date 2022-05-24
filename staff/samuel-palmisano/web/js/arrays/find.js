function find(array, callback) {
    var result;

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (callback(element, i) === true) {
            result = element
            return result
        }

    }

    return result
}

