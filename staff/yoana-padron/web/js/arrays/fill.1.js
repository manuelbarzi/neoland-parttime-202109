//CASO 1

// function fill (array, value){

//     var filled = []

//     for (var i = 0; i < array.length; i++) {

//         filled[i] = value

//     }
//     return filled

// }


// //CASO 1 + CASO 2 + CASO 3

// function fill (array, value, start, end){

//     var filled = []

//     for (var i = 0; i < array.length; i++) {   
//         if (i<start){
//             filled[i] = array[i]
//         }
//         else{
//             filled[i] = value 
//         }


//     }
//     return filled

// }


//CASO 1 + CASO 2 + CASO 3 + CASO 4 + CASO 5 + CASO 6

function fill(array, value, start, end) {
    var filled = []
    
    if (typeof start  === 'string' || typeof end === 'string') {
        filled = array
    }
   
    else {

        for(var i = 0; i < array.length; i++) {

        if (start >= 0) {
            if (i < start || i > end) {
                filled[i] = array[i]
            }

            else {
                filled[i] = value
            }
        }

        else if (start < 0) {
            for (i = 0; i < array.length; i++) {
                if (i < array.length + start) {
                    filled[i] = array[i]
                }
                else {
                    filled[i] = value
                }
            }
        }

        else {
            filled[i] = value
        }
    }

}
return filled
}