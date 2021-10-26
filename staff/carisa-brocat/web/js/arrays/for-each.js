function forEach(array, callback) {
    debugger
    for (var i = 0; i < array.length; i++)
        callback(array[i], i)
}