function indexOf(array, element, index) {

    for (var i = index ? index : 0; i < array.length; i++) {
        var item = array[i]

        if (item === element)
            return i
    }

    return -1

}