// El método slice te devuelve una copia de una porción del array en un nuevo array, no modifica el original
//  Parámetros : (array, start, end) Puedes indicar el inicio y el final (este último opcional)
//el último indice no lo va a incluir, si tenemos una lista de 5 nombres , el último no lo va  a lanzar,
// por ejemplo [ 'Florin', 'Ivan', 'Lian', 'Jai','Patrik'] slice(0, 3) me va a dar el Florin, Ivan, Liam, anque diga que hasta la posición 3, esa no me la dará


//Solución CASO 5: tiene como parámetro (array, -2) start negativo  
//cuando tenemos un comienzo negativo, el indice del comienzo es la longitud del array menos el valor este caso -2 
// al array le resta ese valor osea, 5 es el length, menos 2 = 3 , entonces empezamos en el inice 3 del array
// el indice 
function slice(array, start, end) { //en este caso sólo tenemos start negativo
    var sliced = []

    //cuando el start es negativo el start tiene que sr igual al length + el valor negativo
    // aquí abajo, si el start es menor que el length del array + start (para restarle ese valor)
    // si no, mantenemos el start
    start = start < 0 ? array.length + start : start //otro operador ternario en start

    end = end === undefined ? array.length : (end > array.length ? array.length : end)


    for (var i = start; i < end; i++) { //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element

        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
    return sliced
}
