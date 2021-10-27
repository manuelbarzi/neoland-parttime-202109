function slice(string, start, end) {
    var newString = ''
    if (end === undefined && start > 0) {
       
        for (var i = start; i < string.length; i++) {
            var stringValue = string[i]
            newString = newString + stringValue
        }

        return newString
    }

    else if (end === undefined && start < 0) {
       
        for (var i = (string.length+start); i < string.length; i++) {
            var stringValue = string[i]
            newString = newString + stringValue
        }

        return newString
    }

    else if (end < 0 && start < 0) {
        
        for (var i = (string.length + start); i < (string.length + end); i++) {
            var stringValue = string[i]
            newString = newString + stringValue
        }

        return newString
    }

    else if (end > 0 && start > 0) {
        
        for (var i = start; i < end; i++) {
            var stringValue = string[i]
            newString = newString + stringValue
        }

        return newString
    }


}