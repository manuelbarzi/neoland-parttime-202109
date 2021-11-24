function splice(array, start, deleteCount, item1) {
    if (deleteCount === 0 && item1) {
        for (var i = array.length; i > start; i--) {
            array[i] = array[i - 1]
        }

        array[start] = item1

        return []
    } else if (deleteCount > 0 && item1) {
        var removed = [array[start]]

        array[start] = item1

        for (var i = start + deleteCount; i < array.length; i++) {
            removed[removed.length] = array[i - deleteCount + 1]

            array[i - deleteCount + 1] = array[i]
        }

        if (removed.length < deleteCount) {
            for (var i = start + removed.length; i < start + deleteCount; i++) {
                removed[removed.length] = array[i]
            }
        }

        array.length = array.length - deleteCount + 1

        return removed
    }
} 