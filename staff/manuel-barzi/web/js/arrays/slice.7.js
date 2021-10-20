function slice(array, start, end) {
    var sliced = []

    // start = start < 0 ?
    //     (
    //         array.length + start < 0 ?
    //             0
    //             :
    //             array.length + start
    //     )
    //     :
    //     start

    if (start < 0) {
        if (array.length + start < 0) {
            start = 0
        } else {
            start = array.length + start
        }
    }

    // end = end === undefined ?
    //     array.length
    //     :
    //     (
    //         end > array.length ?
    //             array.length
    //             :
    //             (
    //                 end < 0 ?
    //                     array.length + end
    //                     :
    //                     end
    //             )
    //     )

    if (end === undefined) {
        end = array.length
    } else {
        if (end > array.length) {
            end = array.length
        } else {
            if (end < 0) {
                end = array.length + end
            }
        }
    }

    for (var i = start; i < end; i++) {
        var element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}