function lastIndexOf(string, value) {
    var position = -1
    for(var i = 0; i<string.length; i++){
        var valueString = string[i]
        if(valueString === value){
            position = i
        }
    }
    return position
}