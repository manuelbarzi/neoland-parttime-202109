
function includes(phrase, search, position) {
    var c = 0

    // for (var i = 0; i < phrase.length; i++) {

    for (var i = position? position : 0; i < phrase.length; i++) {
        //variable para guardar cada iteracion de la frase
        var char = phrase[i]

        //variable para guardar cada letra que busca y va guardando en el contador que inicia en 0
        var element = search[c]

        if (char === element) { // si el caracter es igual a cada letra que va guardando, y es sí, 
            // que sume uno al contador para volver a iniciar
            c++
            if (c === search.length) { // si el total del contador es igual a la longitud de lo que buscamos
                return true
            }
        }
        else
        c = 0 // si es que no que ponga el contador a 0 de nuevo
    }

    return false

    // var c = 0 // contador a 0
    // for (var i = 0; i < phrase.length; i++) {

    //     var char = phrase[i]
    //     var target = search[c]

    //     if (char === target) {
    //         c++
    //         if (c === search.length) {
    //             return true
    //         }
    //     }
    //     else {
    //         c = 0
    //     }
    // }
    // return false

}