function reverse(array) {
    var reverted = []
    var j = 0
    debugger
    for( var i=array.length - 1; i>=0; i--){
        reverted[j] = array[i]
        j++
    }
    return reverted
}



