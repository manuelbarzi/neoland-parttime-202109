function map(array, callback) {
    var mapped = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        mapped[i] = callback(element, i, array)
    }

    return mapped
}