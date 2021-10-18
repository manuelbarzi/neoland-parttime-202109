function includes(phrase, search, position) {
    var c = 0 // contador a 0

    for (var i = 0; i < phrase.length; i++) {

        var char = phrase[i]
        var target = search[c]

        if (char === target) {
            c++
            if (c === search.length) {
                return true
            }
        }
        else {
            c = 0
        }
    }
    return false
}