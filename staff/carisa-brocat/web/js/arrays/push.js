function /*push(array, ...element)*/ push(array) {
    debugger
    //     for(var i = 0; i<element.length; i++){
    // var value = element[i]
    //     array[array.length] = value
    // }
    // return array.length
    for (var i = 1; i < arguments.length; i++) {
        var value = arguments[i]
        array[array.length] = value
    }
    return array.length

}