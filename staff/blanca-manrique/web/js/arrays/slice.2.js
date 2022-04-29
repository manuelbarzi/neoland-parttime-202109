function slice(array, start, end) {
    var newArray = []

    // end = end? end: array.length
    debugger
    if (!end) {
        end = array.length
    } else if (end > array.length) {
        end = array.length
    } else if (end < 0) {
        end = array.length + end
        if (end < 0) {
            return newArray
        }
    }
    if (start < 0) {
        start = array.length + start
        if (start < 0) {
            start = 0
        }
    }
    for (var i = start; i < end; i++) {
        var element = array[i]
        newArray[newArray.length] = element
    }
    return newArray
}