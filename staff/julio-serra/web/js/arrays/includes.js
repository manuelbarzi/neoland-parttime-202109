function includes(array, element) {
    // TODO

    // var words = ['esto', 'es', 'un', 'infierno']

    // if (words.includes('infierno') === 0) { // si words incluye la palabra el resultado es true
    //     console.log('es verdadero')
    // } else {
    //     console.log('es falso') // si words no incluye la palabra el resultado es false o -1
    // }
        for (var i = 0; i < array.length; i++) {
            var content = array[i] // declaramos la variable con la que iterara el array
            if (content === element) {
                return true
            } 
        }
        return false
    }
