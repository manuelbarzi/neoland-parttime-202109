function push(array){

    for ( var i = 1; i < arguments.length; i++ ) //aquí iniciamos en el 1, por que en el test en arguments el 0 es array, y queremos iniciar en los animales
            array[array.length] = arguments[i]

   return array.length
}