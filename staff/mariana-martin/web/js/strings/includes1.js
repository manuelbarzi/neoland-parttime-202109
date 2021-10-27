function includes(string, search, position) {
    var i = 0, j = 0

    if (position)    //es para indicar si tenemos un parametro con position iniciar desde ahi, si no desde 0 
        i = position // en el otro ejemplo se uso un operador ternario

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