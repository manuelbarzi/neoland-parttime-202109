function map(array, callback) {
    var newArray= []
    
    for (var i = 0; i < array.length; i++){
        var item = array[i]
        var res = callback(item)
        newArray[i] = res
    }
   return newArray
}