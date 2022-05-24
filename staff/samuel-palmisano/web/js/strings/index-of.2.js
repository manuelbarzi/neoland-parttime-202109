function indexOf(string, value) {
    for (var i = 0; i < string.length && index === -1; i++) {
        var character = string[i]

        if (character === value)
            return i
    }

    return -1
}