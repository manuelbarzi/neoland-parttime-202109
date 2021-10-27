function indexOf(string, value) {
    var index =-1
    for (var i=0; i< string.length; i++){
        var item = string [i];
        if (item === value){
           return index = i
        } 
                                
    }
    return index
}

