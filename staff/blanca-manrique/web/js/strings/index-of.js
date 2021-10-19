//El método indexOf()devuelve el índice correspondiente al primer caracter del string que coindida con el elemento que estamos buscando.
// Si no se encuentra dicho valor devuelve -1


function indexOf (string, value) {
    var index = 0
    for (var i=0; i<string.length; i++){
        var letter = string[i]

        if (letter == value){
            index = i
        }
    }
    if (index == 0){
        index = -1
    }
    return index
}

