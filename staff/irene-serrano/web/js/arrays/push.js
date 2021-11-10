function push() {
  
  var array = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var element = arguments[i];
    array[array.length] = element;
  }

  return array.length;
}
