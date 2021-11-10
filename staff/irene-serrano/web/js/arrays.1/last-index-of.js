function lastIndexOf(arr, value){
    var index;
  for (var i = arr.length-1; i >= 0 ; i--) {
    var currentItem = arr[i];
    if (currentItem === value) {
      return index = i;
    } else    
      index = -1;
  }
  return index;
}

