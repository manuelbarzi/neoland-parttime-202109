function slice(string, start, end){
    var newString = ""
    debugger
    end = end ? (end = end < 0 ? string.length + end :(end = end < string.length ? end : string.length)) :string.length

    start = start === undefined ? start : (start = start < 0 ? string.length + start : start)
    
    for (var i = start; i < end; i++) {
        var stringIndex = string[i]
        newString = newString + stringIndex
    }
    return newString
}