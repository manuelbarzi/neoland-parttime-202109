function slice(array, start, end) {
    var sliced = []

    if (start < 0) {
        if (array.length + start < 0) {
            start = 0
        } else {
            start = array.length + start
        }
    }

    if (end === undefined || end > array.length) {
        end = array.length
    } else if (end < 0) {
        end = array.length + end
    }

    for (var i = start; i < end; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}