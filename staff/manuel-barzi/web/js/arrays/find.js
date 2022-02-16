function find(array, condition) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (condition(element)) {
            return element
        }
    }
}