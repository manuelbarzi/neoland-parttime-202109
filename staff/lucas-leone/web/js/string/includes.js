function includes(string, element) {
    var result=false
    for (let i = 0; i < string.length; i++) {
        if (element[0] == string[i]) {
            for (let d = 0; d < element.length; d++) {
                if (element[d] == string[i + d]) {
                    result=true
                    return result
                }
            }
        }
    }
    return result
}