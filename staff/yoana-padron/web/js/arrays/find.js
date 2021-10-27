function find(array, callback){
var end = array.length
    for (var i = 0; i < end; i++) {
        var element = array[i]
        if(callback(element)){
            end = i  
        }
    }return element
}
