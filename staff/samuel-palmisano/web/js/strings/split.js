function split(string, separator) {
    var parts = []

    if (separator === '') {
        for (var i = 0; i < string.length; i++) {
            var character = string[i]

            parts[i] = character
        }
    } else {
        var part = ''

        for (var i = 0; i < string.length; i++) {
            var character = string[i]

            if (character === separator) {
                parts[parts.length] = part

                part = ''
            } else {
                part += character // part = part + character
            }
        }

        parts[parts.length] = part
    }

    return parts
}
