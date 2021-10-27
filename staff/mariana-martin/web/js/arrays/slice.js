

//Solución CASO 7: tiene como parámetro (array, 2, -1) start positivo y end negativo

function slice(array, start, end) {

    var sliced = []



    //start = start < 0 ? array.length + start : start      //otro operador ternario en start

    //start = start < 0 ? 0 : start
    // estos dos ternarios de arriba se pueden juntar en un solo:
    // en este caso se tendría que agregar otro ternario y acomodar el código de manera legible:

   if (start < 0){
       start = array.length + start

       if(start < 0){
           start = 0
       }
   } else if (start > array.length ){
       start = array.length
   }
   
   if (end || !isNaN(end)){
       if (end < 0){
           end = array.length + end
       } else if (end > array.length){
           end = array.length
       }
   } else {
       end = array.length
   }


    for (var i = start; i < end; i++) { //var i que empeice con start, i tiene que ser menor para iterar hasta el final, comparamos i con el end
        var element = array[i]  //sacamos cada elemento del array y los guardamos en element

        sliced[sliced.length] = element // automáticamente esto nos creara un indice nuevo (una posición)// este mecanismo nos sirve para ir inyectando al final del array nuevos elementos 
    }
    return sliced
}
