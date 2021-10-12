function split(string, separator) {
    array = []
    text = ''
    r = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] != separator) {
            text = text + string[i]
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