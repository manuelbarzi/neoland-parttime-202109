// AN ARRAY INCLUDES A ITEM VALUE
/*
function arrIncludes(arr, value){
    var include;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== value){
            include = false;
        } else 
            return include = true;
    }
    return include

}
*/
function includes(arr, value){
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === value) return  true
    }
    return false
}