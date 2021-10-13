function lastIndexOf(string, value) {
    var index = 0
    for (var i=0; i<string.length; i++){
        var letter = string[i]

        if (letter === value){
            index = i
        }
    }
    if (index == 0){
        index = -1
    }
    return index
}

