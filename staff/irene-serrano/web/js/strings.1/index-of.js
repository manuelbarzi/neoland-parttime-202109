function indexOf(str, value) {
  var index;
  for (var i = 0; i < str.length; i++) {

    var currentItem = str[i];
    if (currentItem === value) {
      return index = i;
    } else    
      index = -1;
  }
  return index;
}
