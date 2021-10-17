function indexOf(array, element) {


    for (var i=0; i<array.length; i++){
        var item = array [i]
        if (item === element){
        return i
    }
}
    return -1
}