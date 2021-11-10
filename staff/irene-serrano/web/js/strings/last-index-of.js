function lastIndexOf(str, value){

    var index; 
  for (var i = str.length-1; i >= 0 ; i--) {
    var currentItem = str[i];
    if (currentItem === value) {
      return index = i;
    } else    
      index = -1;
  }
  return index;
}

