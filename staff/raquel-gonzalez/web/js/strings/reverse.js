function reverse(string) {
    var revertedString = ''
    for (var i = (string.length-1); i>=0; i--) {
        var elementArray = string[i]
        revertedString = revertedString + elementArray
    }
    return revertedString
}