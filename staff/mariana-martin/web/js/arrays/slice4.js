// El método slice te devuelve una copia de una porción del array en un nuevo array, no modifica el original
//  Parámetros : (array, start, end) Puedes indicar el inicio y el final (este último opcional)
//el último indice no lo va a incluir, si tenemos una lista de 5 nombres , el último no lo va  a lanzar,
// por ejemplo [ 'Florin', 'Ivan', 'Lian', 'Jai','Patrik'] slice(0, 3) me va a dar el Florin, Ivan, Liam, anque diga que hasta la posición 3, esa no me la dará


//Solución CASO 4: tiene como parámetro (array, 2 , 0) cuando el end es cero, lo toma como undefined
// en este caso viene 0, le agregamos al ternario undefined, por que el cero lo tomaría como un valor.

function slice(array, start, end) { //en este caso tenemos el end 0, y en el ternario lo tenemos que definir así

    var sliced = [] 

 
    end = end === undefined ? array.length : (end > array.length? array.length : end) 
        // si end es undefined (no viene informado) , me devuelves al array length
        //si el end es un undefined tomamos el length, pero si viene informado , el cero no es un undefined, el cero es un valor
        //entonces como es valor, me quedo con el length, y evaluo lo de los paréntesis, end 0 es mayor que el length??? no, por lo tanto me quedo con cero (end)
    // evaluo y quiero igualar end si tengo end??? si..ok se evalua lo que está dentro del paréntesis (end es mayor que length??? si, me quedo con el length si no con end)
// en este caso nos quedamos con el end y ni entra al for y devuelve un array vacío.

    for (var i = start; i < end; i++) { //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element

        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
    return sliced
}
