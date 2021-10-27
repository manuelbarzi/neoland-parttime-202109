function find(array, callback){
  for (var i=0; i<array.length; i++) {
      var value = array[i]
      if(callback(value, i, array)){
          return value
      }
  }
} 
