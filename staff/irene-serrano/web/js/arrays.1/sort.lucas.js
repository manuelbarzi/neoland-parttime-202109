function sort(array) {
  newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (newArray.length === 0) {
      newArray[newArray.length] = array[i];
    } else {
      for (var j = newArray.length; j >= 0; j--)
        if (newArray[j - 1] < array[i]) {
          newArray[j] = array[i];
        } else if (newArray[j - 1] > array[i]) {
          newArray[j] = newArray[j - 1];
          newArray[j - 1] = array[i];
        }
    }
  }
  array = newArray;
  return array;
}
