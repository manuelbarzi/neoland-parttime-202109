function pop(array) {    
    var lastValue = undefined

    if (array.length !== 0) {
        lastValue = array[array.length - 1]
        array.length = array.length-1
    }
    return lastValue
}