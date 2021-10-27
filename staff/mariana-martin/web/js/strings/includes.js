function includes(string, search, position) {
    var j = 0

    for (var i = position? position : 0; i < string.length; i++) {
        var char = string[i]
        var target = search[j]

        if (char === target) {
            j++

            if (j === search.length) {
                return true
            }
        } else {
            j = 0
        }
    }

    return false
}


