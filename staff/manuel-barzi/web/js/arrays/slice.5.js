function slice(array, start, end) {
    var sliced = []

    //start = start < 0? array.length + start : start
    //start = start < 0? 0 : start

    start = start < 0 ? (array.length + start < 0 ? 0 : array.length + start) : start

    end = end === undefined ? array.length : (end > array.length ? array.length : end)

    for (var i = start; i < end; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}