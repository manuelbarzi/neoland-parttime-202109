function slice(array, start, end) {
    var arrSliced = []

    for (var i = start; i < array.length; i++) {
        var element = array[i]
        arrSliced[arrSliced.length] = element

    }

    return arrSliced
}
