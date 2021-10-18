function splice(array, start, deleteCount, item1) {
    if (deleteCount === 0 && item1) {
        for (var i = array.length; i > start; i--) {
            array[i] = array[i - 1]
        }

        array[start] = item1
        return []

    } else if (deleteCount > 0 && item1) {
        var removed = []
        var arrayItems = '';
        var indexMoved = (start + deleteCount)

        if (indexMoved >= array.length) {
            indexMoved = array.length - 1

            for (var iDel = start; iDel < array.length; iDel++) {
                arrayItems = array[iDel]
                removed[removed.length] = arrayItems
            }

            array[start] = item1
                return removed
        }
        else {
            debugger
            for (var iDel = start; iDel < (start + deleteCount); iDel++) {
                arrayItems = array[iDel]
                removed[removed.length] = arrayItems
            }

            for (var i = start + 1; i < (array.length - deleteCount) + 1; i++) {
                array[i] = array[indexMoved]
                indexMoved++
            }
                array[start] = item1
                array.length = (array.length - deleteCount) + 1
                return removed
            
        }
    }
}


