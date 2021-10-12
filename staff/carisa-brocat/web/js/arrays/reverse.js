function reverse(array) {
    var arrayReverted = []
    var position = 0
    for (var i = array.length - 1; i >= 0; i--) {
        var arrayItems = array[i]
        arrayReverted [position]= arrayItems
        position++
    }
    return arrayReverted
}