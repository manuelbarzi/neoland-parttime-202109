//TE DEVUELVE EL ELEMENTO, EN QUÉ ÍNDICE ESTÁ Y EL ARRAY ENTERO SOBRE EL QUE ESTÁ ITERANDO map()

function map(array, callback) {
    var newArray = []
    debugger
    for (var i = 0; i < array.length; i++){
        var value = array[i]
        newArray[i] = callback(value, i, array)
    }
    return newArray
}