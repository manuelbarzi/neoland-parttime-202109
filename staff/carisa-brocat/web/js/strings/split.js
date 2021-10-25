function split(str, separator, limit){
    var char = ""
    var colector = ""
    var array = []

    for(var i = 0; i < str.length; i++){
        var char = str[i]

        if(separator === ''){
            array[array.length]=char
        }  
        else if(char !== separator){
            colector = colector + char
            if(i === str.length-1){
                array[array.length]=colector
            }
        }
        else if(char === separator){
            array[array.length] = colector
            colector = ""
        } 
    }
    return array
}