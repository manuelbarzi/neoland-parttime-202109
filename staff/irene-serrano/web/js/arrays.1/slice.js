function slice(arr, start, end){
    var result = [];
    //debugger

    start = 
        start < 0 ? (
            arr.length + start < 0 ?  0 : arr.length + start
            ) : start
                

    end = 
        end === undefined ? arr.length : (
            end > arr.length ? arr.length : 
                (end < 0 ?  
                    arr.length + end : end))
                    
   
    for(var i = start; i < end; i++){
        
        if(end === 0){
            return result
        }
        var element = arr[i];
        result[result.length] = element;
        
    }
    
    return result
}