function lastIndexOf(array, element) {
    var position = -1
    for(var i = 0; i<array.length; i++){
        var elementArray = array[i]
        if(elementArray===element){
            position = i
        }
    }
    return position
}