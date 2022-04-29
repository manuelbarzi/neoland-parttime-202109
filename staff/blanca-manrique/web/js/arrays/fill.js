// fill() cambia todos los elementos de un array por un valor estático desde el start (por defecto es 0) hasta end (por defecto array.length)
//Devuelve el arreglo modificado
//Si end isNaN te va a devolver el array original, no va a hacer ninguna modificación.
//Si start isNaN, start va a empezar en la posición 0 y si te va a devolver un array modificado

function fill(array, value, start, end) {

    // start = start ? (start < 0 ? array.length + start : start) : 0
    // end = end? (end < 0? array.length + end : end) : array.length
    if (end) {
        end
        if (isNaN(end)) {
            return array
        }
        else if (end < 0) {
            end = array.length + end
        }
    } else {
        end = array.length
    }

    if(start){
        start
        if(isNaN(start)){
            start = 0
        }
        else if(start < 0){
            if(array.length +start <0){
                start = 0
            }else{
                start = array.length + start
            }

        }
    }else{
        start = 0
    }
    for (var i = start; i < end; i++) {
        array[i] = value
    }
    return array
}