function slice(array, start, end) {
    var sliced = []

    end = end === undefined ? array.length : (end > array.length ? array.length : end)

    for (var i = start; i < end; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}