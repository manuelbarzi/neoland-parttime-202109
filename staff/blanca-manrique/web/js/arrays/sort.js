
// function sort(array){
//     var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]

//     for(var i = 0; i < abc.length; i++){
//         var char = abc[i]

//     }

// }

function sort(array) {
    debugger
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var number = array[i]
        var j = i+1

        for(var j=i+j; j<array.length; j++){
            var element = array[j]

            if (number < element) {
                newArray[i] = number
            }else{
                newArray[i] = element
                newArray[j] = number
            } 
        }

    }
    return newArray
}
