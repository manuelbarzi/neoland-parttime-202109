function fill(array, element, start, end) {

    end = end ? end : array.length
    end = end < 0 ? array.length + end : end

    start = start ? start : 0
    start = start < 0 ? array.length + start : start


    for (var i = start; i < end; i++) {
        array[i] = element
    }
    return array
}