function indexOf(string, value) { // (string = es la frase, value = el valor que queremos saber m y c)
    // TODO

    var count = 0

    for (var i = 0; i < string.length; i++) {

        var element = string[i]
        if (element === value) {
            count = i
        }
    }

    return count





    // var words = ('hola mundo')

    // if (words.indexOf([words]) !== -1) {
    //     console.log(words.indexOf('w'))
    // } else {
    //     console.log('No es la letra que buscas')
    // }

    // contar todo el string, para saber la posicion de una letra del string

}




















// var count = 0 // declaramos la variable para que cuente desde 0 el array
// for (var i = 0; i < string.length; i++) {
//     var content = string[i] // declaramos la variable para saber la posicion
//     // del string y así iterar
//     if (content === value) {
//         count = i
//     }
// }
// return count