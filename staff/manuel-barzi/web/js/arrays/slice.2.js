function slice(array, start, end) {
    var sliced = []

    end = end? end : array.length

    for (var i = start; i < end; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}