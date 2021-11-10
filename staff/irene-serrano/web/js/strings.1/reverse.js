function reverse (str){
    var reversedStr = '';
    for(var i = str.length-1; i>= 0 ; i-- ){
        reversedStr = reversedStr + str[i]
    }
    return reversedStr
}