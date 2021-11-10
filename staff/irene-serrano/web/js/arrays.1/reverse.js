
function arrayReverser (arr){
    var reversedArr;
    var r = 0;
    for(var i = arr.length-1; i>= 0; i--){
        reversedArr[r] = arr[i];
        r++;
    }
    return reversedArr;
}
