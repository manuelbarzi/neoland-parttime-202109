function indexOf(string, value) {
    var index = -1

    for (var i = 0; i < string.length && index === -1; i++) {
        var character = string[i]

        if (character === value)
            index = i
    }

    return index
}