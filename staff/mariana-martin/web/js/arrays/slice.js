

//Solución CASO 7: tiene como parámetro (array, 2, -1) start positivo y end negativo

function slice(array, start, end) {

    var sliced = []



    //start = start < 0 ? array.length + start : start      //otro operador ternario en start

    //start = start < 0 ? 0 : start
    // estos dos ternarios de arriba se pueden juntar en un solo:
    // en este caso se tendría que agregar otro ternario y acomodar el código de manera legible:

    start = start < 0 ?  // si esto es true es igual a lo de los parentesis
        (array.length + start < 0 ?
            0
            : array.length + start)
        :
        start


    end = end === undefined ?
        array.length
        :
        (end > array.length ?
            array.length
            :
            (end < 0 ? 
                array.length + end
                : end))


    for (var i = start; i < end; i++) { //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element

        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
    return sliced
}
