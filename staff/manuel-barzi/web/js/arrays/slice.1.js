function slice(array, start) {
    var sliced = []

    for (var i = start; i < array.length; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}