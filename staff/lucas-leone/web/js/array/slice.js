function slice(array, inicio, fin) {
  debugger
    var newArray = []

    if (inicio >= array.length) {
        return newArray
    } else if (inicio >= 0 && fin >= 0) {
        var d =0 
        for (var i = inicio; i <= fin; i++){
            newArray[d] =array[i]
            d++}
    } else if (inicio < 0) {
        var r = 0
        var value=array.length-inicio
        for (var i = value; r <= array.length; i++) {
            newArray[d] =array[i]
            r++
        }
    } else if (inicio>=0 && fin<0){
        var value=array.length+fin-1
        r=0
        for(var i= inicio;i<=value;i++){
            newArray[r]=array[i]
            r++
        }
    }


    return newArray
}



