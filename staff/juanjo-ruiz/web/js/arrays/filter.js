function filter(array, callback){
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        var word = callback(element, i, array)

        if(word)
        newArray[newArray.length] = word

        
    }
return newArray
}