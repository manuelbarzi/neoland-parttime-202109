//El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.

//var i; va a recorrer el string
// var j; va a recorrer el element

function includes(string, search, position) {
    var i = 0, j = 0
    debugger
    if (position)
        i = position

    for (; i < string.length; i++) {
        var char = string[i]
        var target = search[j]

        if (char === target) {
            j++

            if (j === search.length) {
                return true
            }
        } else {
            j = 0
        }
    }

    return false
}