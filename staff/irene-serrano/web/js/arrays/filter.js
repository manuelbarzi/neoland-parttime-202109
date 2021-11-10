function filter (array, callback, criterio){
    var result = []
    for( var i = 0; i < array.length; i++){
        var element = array[i]
        var newElement = callback(element, i, array, criterio)
        if(newElement !== undefined){
            result[result.length] = newElement
        }
    }
    return result
}