function join(arr, separator) {
  var joined = "";
  //if(separator )
  //separator =  separator ? separator : ','
  separator = separator === undefined ? "," : separator;

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    joined = joined + element;

    //debugger
    if (i < arr.length - 1) {
      joined = joined + separator;
    }
  }
  return joined;
}
