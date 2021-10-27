function map(array, callback) {
    var newArray = []
    debugger
    for (var i = 0; i < array.length; i++){
        var value = array[i]
        newArray[i] = callback(value)
    }
    return newArray
}