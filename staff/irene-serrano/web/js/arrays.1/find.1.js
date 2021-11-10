function find(arr, callback, num){

    for(var i = 0; i < arr.length; i++){
        var element = arr[i]
        callback(element, i, arr, num)
    }

}