function fill (arr, value, start, end){

    end = 
        end ? (
            end > arr.length? arr.length :(
            end > 0 ? end : (
                end + arr.length < 0? 0 : end  + arr.length
                )
            )
        ) : arr.length;

    start = 
        start ? (
            start > 0? start : (
                arr.length + start < 0 ? 0 : arr.length + start
            )
        ) : 0
 
    for( var i = start; i < end; i++){
        arr[i] = value;

    }
    return arr
}