function includes(array, element) {
    // TODO
    
    for (var i = 0; i < array.length; i++){

        if (array[i] === element) 
           return true
    }
    return false  
}

// function includes(arr, value){
//     var include;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] !== value){
//             include = false;
//         } else 
//             return include = true;
//     }
//     return include
// }  