function filter(array, condition) {
    var filtered = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (condition(element)) {
            filtered[filtered.length] = element
        }
    }

    return filtered
}