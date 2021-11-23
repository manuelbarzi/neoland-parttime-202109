
function includes(phrase, search, position) {
    var c = 0

    // for (var i = 0; i < phrase.length; i++) {

    // Queremos ir indice por indice del array para saber si la phrase está en ese array

    for (var i = 0; i < phrase.length; i++)

    var char = phrase[i] // cada indice de la phrase que se guarde en la variable
    var element = search[c] // cada indice del search que buscamos que se guarde en la variable
    // como no puede ser el propio indice, creamos antes la variable c para que vaya "indice por indice"
    // de la palabra search

    if (char === element) {
        c++ // tiene que ir sumando para volver a ir al siguiente caracter
    }
    if (c === search.length) {
        return true
    }
    else 
    c = 0









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