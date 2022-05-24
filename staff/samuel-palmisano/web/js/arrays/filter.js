function filter(arr, callback) {
    var result = []

    for (let i = 0; (i < arr.length); i++) {
        var element = arr[i]
    
        if ( callback(element, i) ){
            result.push(element);
        }
    }
    return result;
}

