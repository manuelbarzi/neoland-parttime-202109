function join(array, separator) {
    var joined = ''

    if (separator === undefined) separator = ','

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        //if (element !== null && element !== undefined && !(element instanceof Array && element.length === 0))
        //if (element !== '' && element !== null && element !== undefined && !(element instanceof Array && element.length === 0))
        if (element !== '' && element != undefined && !(element instanceof Array && element.length === 0))
            joined = joined + element

        if (separator !== '' && i < array.length - 1)
            joined = joined + separator
    }

    return joined
}