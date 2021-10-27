// El método slice te devuelve una copia de una porción del array en un nuevo array, no modifica el original
//  Parámetros : (array, start, end) Puedes indicar el inicio y el final (este último opcional)
//el último indice no lo va a incluir, si tenemos una lista de 5 nombres , el último no lo va  a lanzar,
// por ejemplo [ 'Florin', 'Ivan', 'Lian', 'Jai','Patrik'] slice(0, 3) me va a dar el Florin, Ivan, Liam, anque diga que hasta la posición 3, esa no me la dará


//Solución caso 1 , haciendo TDD  test driven (modificiando el script (códgo) para ir resolviendo cada caso poco a poco

function slice(array, start){

    var sliced = [] //var donde irán los elementos cortados

    for ( var i = start; i < array.length; i++){ //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos start con el length
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element
    
        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
return sliced
}
