function indexOf(arr, value) {
  var index;
  for (var i = 0; i < arr.length; i++) {
    var currentItem = arr[i];
    if (currentItem === value) {
      index = i;
    } else {
      index = -1;
    }
  }
  return index;
}
