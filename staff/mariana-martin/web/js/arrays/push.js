function push(array){

    for ( var i = 1; i < arguments.length; i++ ) //aquí iniciamos en el 1, por que en el test en arguments el 0 es array, y queremos iniciar en los animales
            array[array.length] = arguments[i]  //esto lo que hace es agrega un nuevo elemento a la longitud del array (al final)

   return array.length
}