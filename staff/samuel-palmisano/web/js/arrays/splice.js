function splice(array, start, deleteCount, element) {
    if (deleteCount === 0 && element) {
        for (var i = array.length; i > start; i--) {
            array[i] = array[i - 1]
        }

        array[start] = element

        return []
    } else if (deleteCount > 0 && element) {
        var removed = [array[start]]
        
        array[start] = element

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