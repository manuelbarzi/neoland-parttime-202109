// El método slice te devuelve una copia de una porción del array en un nuevo array, no modifica el original
//  Parámetros : (array, start, end) Puedes indicar el inicio y el final (este último opcional)
//el último indice no lo va a incluir, si tenemos una lista de 5 nombres , el último no lo va  a lanzar,
// por ejemplo [ 'Florin', 'Ivan', 'Lian', 'Jai','Patrik'] slice(0, 3) me va a dar el Florin, Ivan, Liam, anque diga que hasta la posición 3, esa no me la dará


//Solución caso 2 

function slice(array, start, end){ //tiene argumento adicional end (puede o no existir, esa es opcional)

    var sliced = [] //var donde irán los elementos cortados

   end = end? end : array.length //usamos el operador ternario 
                                //quiere decir pregunta si tenemos end???? si si tenemos dejamos end, si no, entonces al length
    for ( var i = start; i < end; i++){ //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element
    
        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
return sliced
}
