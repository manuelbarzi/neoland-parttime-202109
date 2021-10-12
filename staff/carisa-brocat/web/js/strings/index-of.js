function indexOf(string, value) {
    for(var i = 0; i < string.length; i++){
        var valueString = string[i]
        if(valueString===value){
            return i
        }
    }
    return -1
}