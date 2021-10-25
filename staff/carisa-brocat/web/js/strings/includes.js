function includes(string, search) {
    var j = 0

    for (var i = 0; i < string.length; i++) {
        var elementString = string[i]
        var elementSearch = search[j]

        if (elementString === elementSearch) {
            j++
            
            if (j === search.length) {
                return true
            }
        }
    }
    return false
}