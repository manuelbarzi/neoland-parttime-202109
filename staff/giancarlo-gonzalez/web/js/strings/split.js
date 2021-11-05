function split (string, separator){
    array = []
    text = ""   
    r =0
    for ( var i =0; i < string.length; i++)  {
        if (string[i]!= separator){
            text = text + string[i]
        }
        else {
            array[r] = text
            text =""
            r++
        }

    }
    return array
}