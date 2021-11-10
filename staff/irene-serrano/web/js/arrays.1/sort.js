var count = 0

function sort(arr, criterio) {
  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr.length; i++) {
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

      count++
    }
  }

  console.log('iteraions', count)
  
  return arr;
}
