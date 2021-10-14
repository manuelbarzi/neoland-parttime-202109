function splice(array, start, deleteCount, item1) {
    if (deleteCount === 0 && item1) {
        for (var i = array.length; i > start; i--) {
            array[i] = array[i - 1]
        }

        array[start] = item1

        return []
    } else if (deleteCount > 0) {
        // TODO
    }
}