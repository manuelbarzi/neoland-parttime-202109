function reverse(array, element) {
    var reverted = []
    var r = 0
    for (var i = array.length - 1; i >= 0; i--) {
        reverted[r] = array[i]
        r++
    }
    return reverted
}