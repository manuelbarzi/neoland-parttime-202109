function sort(array){
    var a, b, tmp;
    
    for ( var i = 0; i < array.length; i++){
        a = array[i];

        for ( var j = i; j < array.length; j++){
            b = array[j];    

            if (b < a){
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp; 
                j = array.length;
            } 
            
        }
    }
    
    return array;
} 