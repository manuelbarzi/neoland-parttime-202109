//SEARCH: Podemos imponer un índice en el que empieza la búsqueda, y en este caso comienza a buscar desde el final del array hasta el inicio. Si search es mayor o igual que la longitud del array, nos sacará por pantalla el último elemento dentro del array que coincida con element. Si es un valor negativo, se comienza por el final del array y vamos recorriendo el array desde el final hasta el inicio.

function lastIndexOf(array, element, search) {
    var index = 0
    debugger
    if (search === undefined) {
        for (var i = 0; i < array.length; i++) {
            var word = array[i]

            if (word == element) {
                index = i
            }
        }
        if (index == 0) {
            index = -1
        }
    } else {
        for (var i = array.length + search; i > 0; i--) {
            var word = array[i]

            if (word == element) {
                index = i
                return index
            }
        }
        if (index == 0) {
            index = -1
        }
    }
    return index
}

