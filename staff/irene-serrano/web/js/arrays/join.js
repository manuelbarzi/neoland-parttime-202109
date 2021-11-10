function join(arr, separator) {
  var joined = "";
  separator = separator === undefined ? "," : separator;

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    joined = joined + element;

    if (i < arr.length - 1) {
      joined = joined + separator;
    }
  }
  return joined;
}
