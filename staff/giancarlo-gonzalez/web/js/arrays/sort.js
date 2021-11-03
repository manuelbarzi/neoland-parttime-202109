//var count = 0

function sort(array, callback) {
    for (var i = 0; i < array.length - 1; i++) {
        var min = array[i], k = i
        for (var j = i + 1; j < array.length; j++) {
            var current = array[j]

            if (callback? callback(current, min) < 0 : current + '' < min + '') {
                k = j
                min = current
            }
            // count++
        }
        if (k !== i) {
            var temp = array[i]
            array[i] = array[k]
            array[k] = temp
        }
    }

    //console.log('count', count)

    return array
}