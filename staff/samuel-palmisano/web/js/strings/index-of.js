function indexOf(string, value, fromIndex) {
    var j = 0

    for (var i = fromIndex? fromIndex : 0; i < string.length; i++) {
        var character = string[i]

        if (character === value[j]) {
            j++

            if (j === value.length) {
                return i - j + 1
            }
        } else { 
            j = 0
        }   
    }

    return -1
}