function includes(array, element) {
    // TODO

    // var words = ['esto', 'es', 'un', 'infierno']

    // if (words.includes('infierno') === 0) { // si words incluye la palabra el resultado es true
    //     console.log('es verdadero')
    // } else {
    //     console.log('es falso') // si words no incluye la palabra el resultado es false o -1
    // }
    var result = 0
    for (var i = 0; i < array.length; i++) {
        if (element !== array[i]) {
            result = false
        } else {
            return true
        }
    }
    return result
}