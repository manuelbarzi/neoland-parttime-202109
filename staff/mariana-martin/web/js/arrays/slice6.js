// El método slice te devuelve una copia de una porción del array en un nuevo array, no modifica el original
//  Parámetros : (array, start, end) Puedes indicar el inicio y el final (este último opcional)
//el último indice no lo va a incluir, si tenemos una lista de 5 nombres , el último no lo va  a lanzar,
// por ejemplo [ 'Florin', 'Ivan', 'Lian', 'Jai','Patrik'] slice(0, 3) me va a dar el Florin, Ivan, Liam, anque diga que hasta la posición 3, esa no me la dará


//Solución CASO 6: tiene como parámetro (array, -100) start negativo  
//cuando tenemos un comienzo negativo, que es muuuucho mayor al array length 
// nos debería regresar todo el array los mismos elementos que tiene el original

function slice(array, start, end) { //en este caso tenemos un star muuucho mas grande que el length

    var sliced = []

   //aquí la situación del caso 5 no serviría porque tenemos que limitar, si no nos dará el array menos el -100 y nos dará muchas posiciones undefined
  
 
    start = start < 0 ? array.length + start : start      //otro operador ternario en start
        // tenemos que hacer otro ternario de start para limitar eso
        //entonces si después de haber hecho el primer ternario, sigue siendo menor que length, entonces que se quede en el cero
        // -95 no tiene sentido
    start = start < 0 ? 0 : start

    // estos dos ternarios de arriba se pueden juntar en un solo:

    start = start < 0 ? (array.length + start < 0 ? 0 : array.length +start) : start

    end = end === undefined ? array.length : (end > array.length ? array.length : end)

    for (var i = start; i < end; i++) { //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element

        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
    return sliced
}
