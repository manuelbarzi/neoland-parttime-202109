function fill(array, element, start, end) {

    
    //contar el array, y en la posicion del end cambiarlo por el start

    for (var i = start; i < array.length; i++) {
        array[i] = element
    }


return array








/*     end = end ? end : array.length
    end = end < 0 ? array.length + end : end

    start = start ? start : 0
    start = start < 0 ? array.length + start : start


    for (var i = start; i < end; i++) {
        array[i] = element
    }
    return array */
}