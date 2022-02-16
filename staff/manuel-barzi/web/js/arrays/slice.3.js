function slice(array, start, end) {
    var sliced = []

    //end = end? end : array.length
    //end = end > array.length? array.length : end

    //end = end? end > array.length? array.length : end : array.length
    end = end ? (end > array.length ? array.length : end) : array.length

    for (var i = start; i < end; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}