function split(string, separator) { //'nu deseo feliz', ' '
     var array = []
     var text = ''
     var r = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] != separator) {
            text = text + string[i] //text=''
                                    //Array=[nu,deseo, ]
        } else{
            array[r]=text
            text=''
            r++
        }

    }
return array
}



//var array = []
/*for (let i = 0; i < string.length; i++) {
    var text = ""
    if (string[i] == separator) {
        for (r = i + 1; string[r] == separator; r++) {
            text = text + string[r]
        }
        array = array + text
    }

}
return array*/