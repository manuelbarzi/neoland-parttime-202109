function includes(string, element) {
    var words = ''

    for (var i = 0; i < string.length; i++) {
        var elementString = string[i]

        if (elementString !== ' ') {
            words = words + elementString

            if (words === element) {
                return true
            }
        }

        else {
            words = ''
        }

    }
    return false
}