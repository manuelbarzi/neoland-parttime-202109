function fill(array, value, start, end) {
    // TODO
    if (typeof start === 'string' || typeof end === 'string') {
        array[i] = array[i]
    }

    else {

    
    for (var i = 0; i < array.length; i++) {

        if (start >= 0){
            if(i < start || i >= end){
                        array[i] = array[i]
                    }
                    else{
                        array[i] = value
                    }
        }

        else if (start < 0){
            for (i = 0; i < array.length; i++) {
                if (i < array.length + start) {
                    array[i] = array[i]
                }
                else {
                    array[i] = value
                }
            }
        }
        else{
            array[i] = value
        }
        
        
    }
    return array
}   
    
    return array
}