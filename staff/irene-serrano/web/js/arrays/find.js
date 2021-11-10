function find (array, callback, criterio) {
    var res;
    for (var i = 0; i < array.length; i++){
        var element = array[i]
        res =  callback(element, i, array, criterio)
        if( res !== undefined){
            return res
        }
    }

}