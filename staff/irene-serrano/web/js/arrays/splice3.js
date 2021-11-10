/*function splice(arr, init, deleteCount, value) {
  var res = [];
  var j = 0;
  var h = init;
  var newIndex = init + deleteCount;
  //debugger;

  for (var d = init; d < newIndex; d++) {
    res[j] = arr[d];
    j++;
  }

  for (var i = 0; i < arr.length - deleteCount; i++) {
    arr[init] = value;
    if (i > init) {
      arr[i] = arr[newIndex];
      newIndex++;
    }
  } 
  return res;
}
*/
function splice(arr, init, deleteCount, value) {
  
  var newArr = [];
  var res = [];
  var j = 0;
  var c = 0;
  var newIndex = init + deleteCount;


  for (var i = 0; i < arr.length; i++) {
    if (i === init) {
      newArr[j] = value;
      
      i = newIndex;
      j++;
    }
    newArr[j] = arr[i];
    j++;
  }
  for(var r = init; r<= newIndex; r++ ){
    res[c] = arr[r];
    c++

  }

  arr = newArr;

  return res;
}


