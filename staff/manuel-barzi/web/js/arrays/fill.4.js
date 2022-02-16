function fill(array, value, start, end) {
    if (start < 0)
        if ((start = array.length + start) < 0)
            start = 0
            
    if (end > array.length)
        end = array.length

    for (var i = start; i < end; i++)
        array[i] = value

    return array
}