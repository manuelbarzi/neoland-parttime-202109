function indexOf (array, value) {

    var index;
   
    for(var i = 0; i < array.length; i++){
        var search = array [i];

        if (search === value){
            index = i;
        }
        

    }
    return index
}