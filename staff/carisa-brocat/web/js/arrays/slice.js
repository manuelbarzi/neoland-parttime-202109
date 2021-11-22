function slice(array, start, end) {
    var newArray = []

    if (end === undefined && start > 0) {
        for (var i = start; i < array.length; i++) {
            var arrayElement = array[i]
            newArray[newArray.length] = arrayElement

        }
        return newArray
    }
    else if (end === undefined && start < 0) {
        for (var i = (array.length + start); i < array.length; i++) {
            var arrayElement = array[i]
            newArray[newArray.length] = arrayElement

        }
        return newArray
    }
    else if (end < 0 && start > 0) {
        for (var i = start; i < (array.length + end); i++) {
            var arrayElement = array[i]
            newArray[newArray.length] = arrayElement

        }
        return newArray
    }
    else if (end > 0 && start > 0) {
        end > array.length ? array.length : end
        for (var i = start; i < end; i++) {
            var arrayElement = array[i]
            newArray[newArray.length] = arrayElement
        }
        return newArray
    }

}
