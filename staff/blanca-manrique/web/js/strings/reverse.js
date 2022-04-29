function reverse(string) {
    var reverted = ""
    for (var i = string.length - 1; i >= 0; i--) {
        reverted += string[i] 
        //reverted = reverted + string[i]
        //para i= 9: reverted = ""+o
        //para i= 8: reverted = ""o +d
        //para i= 7: reverted = ""od +n
    }
    return reverted
}
