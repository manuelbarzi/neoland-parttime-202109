function map(array, callback) {

    var result = []

    for ( var i = 0; i < array.length; i++ ) {
        var element = array[i]

        result[i] = callback(element, i, array)        
    }

    return result
}

