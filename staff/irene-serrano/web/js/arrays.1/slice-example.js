function slice(array, start, end) {
  var sliced = [];

  start =
    start < 0 ? (array.length + start < 0 ? 0 : array.length + start) : start;

  end =
    end === undefined
      ? array.length
      : end > array.length
      ? array.length
      : end < 0
      ? array.length + end
      : end;

  for (var i = start; i < end; i++) {
    var element = array[i];

    sliced[sliced.length] = element;
  }

  return sliced;
}
