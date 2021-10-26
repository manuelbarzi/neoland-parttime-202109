function fill(array, value, start, end) {
    if (start < 0)
        start = array.length + start

    if (end > array.length)
        end = array.length

    for (var i = start; i < end; i++)
        array[i] = value

    return array
}