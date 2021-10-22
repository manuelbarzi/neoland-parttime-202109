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


//CASO 1 + CASO 2 + CASO 3 + CASO 4

function fill(array, value, start, end) {
    var filled = []

    for (var i = 0; i < array.length; i++) {
        if (start >= 0) {
            if (i < start || i > end) {
                filled[i] = array[i]
            }
            else if(start<0){
                //aqui caso 6
            }
            else {
                filled[i] = value
            }
        }
        else{
            filled[i] = value
        }

    }
    return filled
}