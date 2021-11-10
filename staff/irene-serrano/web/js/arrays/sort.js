function sort(arr, criterio) {
  //debugger
  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr.length - 1; i++) {
      var elementBase = arr[i];
      var elementCompare = arr[i + 1];

      criterio = criterio ? criterio : 1;
      if (criterio > 0) {
        if (elementCompare + '' < elementBase + '') {
          arr[i] = elementCompare;
          arr[i + 1] = elementBase;
        }
      } else if (criterio < 0) {
        if (elementCompare + '' > elementBase + '') {
          arr[i] = elementCompare;
          arr[i + 1] = elementBase;
        }
      }

    }
  }


  
  return arr;
}
