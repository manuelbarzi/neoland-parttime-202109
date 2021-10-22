

//CASO 1

// function join(array) {
//     var joined = ''

//     for (var i = 0; i < array.length; i++) {

//         var element = array[i]

//         joined = joined + element

//         if (i < array.length - 1)
//             joined = joined + ','
//     }

//     return joined
// }


//CASO 1 + CASO 2

// function join(array, separator) {
//     var joined = ''

//     for (var i = 0; i < array.length; i++) {

//         var element = array[i]

//         joined = joined + element


//         if (separator !== '')
//             if (i < array.length - 1)
//                 joined = joined + ','
//     }

//     return joined
// }


// CASO 1 + CASO 2 + CASO 3

// function join(array, separator) {
//     var joined = ''

//     //separator = separator === undefined? ',' : separator

//     if (separator === undefined) separator = ','

//     for (var i = 0; i < array.length; i++) {
//         var element = array[i]

//         joined = joined + element


//         // if (separator !== '')
//         //     if (i < array.length - 1)

//         if(separator !== '' && i< array.length - 1)
//                 joined = joined + separator
//     }

//     return joined
// }


//CASO 1 + CASO 2 + CASO 3 + CASO 4 + CASO 5 + CASO 6 + CASO 7 + CASO 8 + CASO 9 + CAS0 10

function join(array, separator) {
    var joined = ''

    //separator = separator === undefined? ',' : separator

    if (separator === undefined) separator = ','

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (element !== null && element !== undefined && !(element instanceof Array && element.length === 0))
        joined = joined + element


        if(separator !== '' && i< array.length - 1)
                joined = joined + separator
    }

    return joined
}



