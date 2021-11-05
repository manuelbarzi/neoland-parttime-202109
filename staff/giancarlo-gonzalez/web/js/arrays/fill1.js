function fill(array, value, start, end) {
    var filled = []

    for (var i = 0; i < array.length; i++) {
        if (start >= 0) {
            if (i < start || i > end) {
                filled[i] = array[i]
            }
            else if(start<0){
                //aqui caso 6
            }
            else {
                filled[i] = value
            }
        }
        else{
            filled[i] = value
       }
    }
    return filled
}
/*
function fill(array, value, start, end) {
    // TODO
    if (typeof start === 'string' && typeof end === 'string' || typeof end === 'string') {
        return array
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

}*/