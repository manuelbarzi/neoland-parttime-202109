function fill (array, value, start, end){
    var filled = []
    if (start>0){
             for (var i = 0; i < array.length; i++) {
         if(i<start){
            filled[i] = array[i]
         }
         else{
             filled[i]= value
         }
        }
        }
    else if (start < 0){
    }
return filled
}
console.log("a")