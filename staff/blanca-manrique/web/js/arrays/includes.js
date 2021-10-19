//El método includes() determina si un array/string incluye un determinado elemento, devuelve true o false según corresponda.
//Si yo estoy buscando en un array el elemento "hola", pero ese array no está formado por un string ==="hola" me saca false
// Si yo estoy buscando en el siguiente array el número 2 [3,0,2,5,2] me va a sacar true, pero no va a esperar a sacarte toda la lista de doses, simplemente te muestra si existe----true, o no----false

function includes (array, element){
    debugger
    for (var i = 0; i<array.length; i++){
        var current = array[i]

        if (current === element){
            return true
        }
    }
    return false
}

