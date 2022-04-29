function lastIndexOf(array, element, index) {
    for (var i = index ? (index < 0 ? array.length+index : index) : array.length - 1; i > 0; i--) {
        var item = array[i]

        if (item === element) {
            return i
        }
    }
    return -1
}