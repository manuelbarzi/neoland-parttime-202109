function lastIndexOf(string, value) {
    var index =-1
    for (var i = 0; i< string.length; i++){
        var item = string [i]
        if (item === value)
            index = i
             }
    return index
}
