function lastIndexOf(array, element) {
 
    var result = 0

    for (var i = 0; i < array.length; i++) {
        var current = array[i];

        if (element==current){
            result = i
        }
    }
    if(result==0){result==-1}{
        return result
    }
}