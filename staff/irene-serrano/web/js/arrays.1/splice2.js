function splice(array, start, deleteCount, item1) {
  if (deleteCount === 0 && item1) {
    for (var i = array.length; i > start; i--) {
      array[i] = array[i - 1];
    }

    array[start] = item1;

    return [];
  } else if (deleteCount > 0 && item1) {
      console.log(array);
    var res = [];
    var deleteIndex = start + deleteCount;
   
    for (var i = array.length; i > start; i--) {
      array[i] = array[i - 1];
      
      if (i === deleteIndex) {
        for (var j = start; j <= deleteIndex; j++) {
            var h = 0;
            res[h] = array[j];
            h++;
          }        
      //  i = start;
        array[start] = item1;
      }
    }
    
    console.log(res);
    console.log(array);
    return res;
    /*
       var removed = [];

       for( var i = start; i < (start + deleteCount) ; i++){
           removed[removed.length] = array[i]
           array[i] = item1
       }
       return removed      
       */
  }
}
