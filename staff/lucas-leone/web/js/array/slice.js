function slice(array, inicio, fin) {
  debugger
    var newArray = []

    if (inicio >= array.lenght) {
        newArray = []
    } else if (inicio >= 0 && fin >= 0) {
        for (var i = inicio; i < fin; i++)
            newArray = newArray + array[i]
    } else if (inicio < 0) {
        var r = 0
        for (var i = array.length; r = -inicio; i--) {
            newArray = newArray + array[i]
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



