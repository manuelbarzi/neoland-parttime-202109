function reverse(string) {
    var reverted =""

    var r =0;
    for (var i=string.length-1; i>=0; i--){
        reverted = reverted+string[i];
        r++
    }
    return reverted
} 