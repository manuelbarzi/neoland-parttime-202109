function slice(array, start, end) {
    var newArray = []
    var position = 0
    if (end === undefined && start > 0) {
        for (var i = start; i < array.length; i++) {
            var arrayElement = array[i]
            newArray[position] = arrayElement
            position++
        }
        return newArray
    }
    else if (end === undefined && start < 0) {
        for (var i = (array.length + start); i < array.length; i++) {
            var arrayElement = array[i]
            newArray[position] = arrayElement
            position++
        }
        return newArray
    }
    else if (end < 0 && start > 0) {
        for (var i = start; i < (array.length + end); i++) {
            var arrayElement = array[i]
            newArray[position] = arrayElement
            position++
        }
        return newArray
    }
    else if (end > 0 && start > 0) {
        for (var i = start; i < end; i++) {
            var arrayElement = array[i]
            newArray[position] = arrayElement
            position++
        }
        return newArray
    }

}