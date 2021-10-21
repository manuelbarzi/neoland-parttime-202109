function join(array, separator) {
    var joined = ''

    //separator = separator === undefined? ',' : separator

    if (separator === undefined) separator = ','

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        joined = joined + element

        // if (separator !== '')
        //     if (i < array.length - 1)
        if (separator !== '' && i < array.length - 1)
            joined = joined + separator
    }

    return joined
}