function indexOf(array, element) {
    var index
    debugger
    for (var i= 0; i<array.length; i++){
        var word = array[i]
        if (word === element){
            index = i
        }
    }
    return index
}
