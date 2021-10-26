function fill(array, value, start, end) {

    if(start){
        if (start < 0 ) {
            start =  array.length + start;
        }
    } else {
        start = 0;
    }
    

    
    if (end) {
        if ( end < 0 ) {
            end = array.length + end
        }
    } else {
        end = array.length;
    }
    

    for (var i = start; i < end ; i++) {
        array[i] = value;  //igualé el valor del indice del array por el 6 (value), osea me accedí al índice del array con[i]
    }
    return array;
}


