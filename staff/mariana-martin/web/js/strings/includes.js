function includes(string, element) {
    
    var letras = ''
    for (var i = 0; i < string.length; i++) {
        var elem = string[i]

    if (elem !== ' ') {
            letras = letras + elem

    if (letras === element) {
                return true
    }
    }
        else {
            letras = ''
        }

    }
    return false
}