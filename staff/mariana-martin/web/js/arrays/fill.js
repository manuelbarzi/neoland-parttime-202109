function fill(array, value, start, end) {

  
        start = start ? (start < 0 ? array.length + start : start) : 0
    //end = end? ( end  < 0? array.length + end : end ) : array.length

    if (end) {
        end 
        if (isNaN (end)){
            return array
        }
        else if (end < 0) {
           end = array.length + end         
        }
    } 
    else { 
        end = array.length
    }
   
    for (var i = start; i < end; i++) {
        array[i] = value
    }
    return array
}