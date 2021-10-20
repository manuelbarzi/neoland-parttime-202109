function slice(array, start, end) {
    var expected = []
    var j = 0
    if (end === undefined && start > 0) {
        for (var i = start; i < array.length; i++) {
            var element = array[i]
            expected[j] = element
            j++
        }
        return expected
    }
    else if (end === undefined && start < 0) {
        for (var i = (array.length + start); i < array.length; i++) {
            var element = array[i]
            expected[j] = element
            j++
        }
        return expected
    }
    else if (end < 0 && start > 0) {
        for (var i = start; i < (array.length + end); i++) {
            var element = array[i]
            expected[j] = element
            j++
        }
        return expected
    }
    else if (end > 0 && start > 0) {
        for (var i = start; i < end; i++) {
            var element = array[i]
            expected[j] = element
            j++
        }
        return expected
    }

}
