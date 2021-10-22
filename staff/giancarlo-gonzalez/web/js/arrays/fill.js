function fill(array, value, start, end) {
    var filled = []
    if(end === undefined){
    for (var i = 0; i < array.length; i++) {
        if (i < start) {
            filled[i] = array[i]
        }
        else {
            filled[i] = value
        }
    }
    }
    else if (end >0){
        for (var i = 0; i < array.length; i++) {
            if (i < start && i> end) {
                filled[i] = array[i]
            }
            else {
                filled[i] = value
            }
    
        }
        }
        return filled
}
console.log("a")