// function some(array, callback) {
//     var result = false

//     for (var i = 0; i < array.length; i++) {
//         var element = array[i]

//         if (callback(element, i) === true) {
//             result = true
//             return result
//         }

//     }

//     return result
// }

// ________________________________________________________________________

// function some(array, callback) {
//     var result = false

//     for (var i = 0; (i < array.length && !result); i++) {
//         var element = array[i]

//         if (callback(element, i)) {
//             result = true
        
//         }

//     }

//     return result
// }

// ________________________________________________________________________

function some(array, callback) {
    var result = false

    for (var i = 0; (i < array.length && !result); i++) {
        var element = array[i]

       result = ( callback(element, i) ) ? true : false;

    }

    return result
}