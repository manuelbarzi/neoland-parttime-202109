function slice(string, start,end) {

//     var newString = ''


//     for (var i = start; i < string.length; i++) {
//         var current = string[i]

//         newString = newString + current
//     }
//     return newString

// Versión caso 2

var newString = ''

    end = end? end : string.length 
    end = end < 0 ? string.length + end : end

    for (var i = start; i < end; i++){
        var current  = string[i]

        newString = newString + current 
        
    }
return newString

}