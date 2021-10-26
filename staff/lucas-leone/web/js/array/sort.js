
function sort(array, criterio) {
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length; i++) {
      var elementBase = array[i];
      var elementCompare = array[i + 1];

      criterio = criterio ? criterio : 1;
      if (criterio > 0) {
        if (elementCompare + '' < elementBase + '') {
          array[i] = elementCompare;
          array[i + 1] = elementBase;
        }
      } else if (criterio < 0) {
        if (elementCompare + '' > elementBase + '') {
          array[i] = elementCompare;
          array[i + 1] = elementBase;
        }
      }

    }
  }


  return array;
}
}



