Chachay.prototype.indexOf = function indexOf(callback) {
    var index;
    for (var i = 0; i < string.length; i++){
        var current = string[i];
        if(current === value){
            index = i;
        }
    }
    return index
}