function slice(array, start, end) {
    var result = []
    if (end === undefined && start >0) {
        for (var i = start; i < array.length; i++) {
            var element = array[i]
            result[result.length] = element
        }
        return result

    } else if (end > 0) {
        for (var i = start; i < end; i++) {
            var element = array[i]
            if (element != undefined) {
                result[result.length] = element
            }
        }
        return result
    }
    else if (end === undefined && start < 0) {
        for (var i = array.length + start; i < array.length; i++) {
            var element = array[i]
            if (element != undefined) {
                result[result.length] = element
            }
        }
    }
        else {
        var result = []
        return result
    }
    return result
}