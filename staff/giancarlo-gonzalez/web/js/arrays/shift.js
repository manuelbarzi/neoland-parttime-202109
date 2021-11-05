 function shift(){
    var element=array[0]
    for (i=0;i<array.length; i++){
        array[i] = array[i+1]
    }
     return element
 }