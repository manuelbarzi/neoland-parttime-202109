function indexOf(array, value) {
    // TODO
    // encuentra si un elemento existe en el array

    //var animals = ['camell', 'duck', 'shark', 'dog', 'cat']

    // if (animals.indexOf('shark') !== -1) {
    //     console.log('Im a big shark')
    // } else {
    //     console.log('No soy el animal que esperabas')
    // }

    var result
    for (var i = 0; i < array.length; i++) {
        var content = array[i]
        if (content === value) {
            result = i
        } else {
            result = 2
        }
    }
    return result





}