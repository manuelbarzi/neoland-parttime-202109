function indexOf(array, element) {
    for (var i=0; i<array.length; i++){
        var elementArray = array [i]
        if (elementArray === element){
        return i
    }
}
return -1
}