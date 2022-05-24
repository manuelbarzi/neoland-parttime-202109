function slice(string, init, end) {
    var slice = ''

    for (var i = init < 0? string.length + init : init; i < (end? (end < 0? string.length + end : end) : string.length); i++) {
        var char = string[i]

        slice += char
    }

    return slice
}