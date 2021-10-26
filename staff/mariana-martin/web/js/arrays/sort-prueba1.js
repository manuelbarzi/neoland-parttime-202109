
function sort(array){
    var newArray = []
   
    for(var i = 0; i < array.length; i++){
        var number = array[i]
    

        for( var j = 1; j<array.length; j++){
            var element = array[j]

            if (number < element ){
                newArray[i] = number
            } else {
                newArray[i] = element
                newArray[j] = number
            }
        }
     
}
return newArray
}