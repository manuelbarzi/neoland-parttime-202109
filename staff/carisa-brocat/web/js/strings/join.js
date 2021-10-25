function join(array) {
    var string = ''

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        string = string + element

        if (i < array.length - 1)
            string = string + ','

    }
    return string
}