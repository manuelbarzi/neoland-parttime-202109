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