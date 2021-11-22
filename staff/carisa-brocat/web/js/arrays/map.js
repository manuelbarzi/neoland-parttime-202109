function map(array, callback){
    debugger
  var newArray = []
    for(var i = 0; i<array.length; i++){
         newArray[i] = callback(array[i], i, array)

    }
   return newArray
}