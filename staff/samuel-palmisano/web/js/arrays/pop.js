function pop(array) {
    if (array.length === 0)
        return

    var last = array[array.length - 1]

    array.length-- // array.length = array.length - 1

    return last
}