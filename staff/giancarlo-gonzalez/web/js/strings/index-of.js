function indexOf(string, value) {
    
    var result =0;

    for (var i=0; i < string.length; i++){

        var curr = string [i];

        if (curr === value) {
            result = i;
        }
    
    }
    return result
} 