function join(array) {
    var joined = ''

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        joined = joined + element

        if (i < array.length - 1)
            joined = joined + ','
    }

    return joined
}