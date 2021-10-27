// El método slice te devuelve una copia de una porción del array en un nuevo array, no modifica el original
//  Parámetros : (array, start, end) Puedes indicar el inicio y el final (este último opcional)
//el último indice no lo va a incluir, si tenemos una lista de 5 nombres , el último no lo va  a lanzar,
// por ejemplo [ 'Florin', 'Ivan', 'Lian', 'Jai','Patrik'] slice(0, 3) me va a dar el Florin, Ivan, Liam, anque diga que hasta la posición 3, esa no me la dará


//Solución caso 3 : cuando el end es más grande que el length... osea ya no hay más indices y di lo dejamos así, nos mandaría indices undefined
//cuando en el numero del end no hay nada sale undefined intenta buscar algo , si el end es mas grande/largo
//en el método oroginal si esto pasa, corta el array hasta donde es el length, sin agregar undefined

function slice(array, start, end) { //tiene argumento adicional end (puede o no existir, esa es opcional)

    var sliced = [] //var donde irán los elementos cortados

   // end = end ? end : array.length              // - 1era indicación //usamos el operador ternario 
                                                //quiere decir pregunta si tenemos end???? si si tenemos dejamos end, si no, entonces al length
   // end = end > array.length ? array.length : end           // - 2da indicación// //usamos otro operador para indicar que si el end es mayor que el length, nos quedamos con le length que sería igualado a end, y si no con el end

    //ESTO DE ARRIBA se puede escribir en una sola línea así: 

    end = end? (end > array.length? array.length : end) : array.length   
    // evaluo y quiero igualar end si tengo end??? si..ok se evalua lo que está dentro del paréntesis (end es mayor que length??? si, me quedo con el length si no con end)

    for (var i = start; i < end; i++) { //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element

        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
    return sliced
}
