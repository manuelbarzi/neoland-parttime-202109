// function indexOf(string, value) {

// var result = 0
// for ( var i = 0 ; i < string.length; i++){
//         var letra = string[i]

//         if (letra === value){
//           result = i
//           return result
//         } 

// }
// return  -1
// }
//     // TODO

// esta solución es para buscar la palabra "dog", bucando letra por letra, con otra variable J, y comparando el length del valor osea del "dog"
function indexOf(string, value, fromIndex) {
    var j = 0

    for (var i = fromIndex? fromIndex : 0; i < string.length; i++) {
        var character = string[i]

        if (character === value[j]) {
            j++

            if (j === value.length) {
                return i - j + 1
            }
        } else { 
            j = 0
        }   
    }

    return -1
}