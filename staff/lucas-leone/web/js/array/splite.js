function spliceArr(array, init, deleteIndex, value) {

    for (var i = array.length; i = init; i--) {
        array[i + 1] = array[i]
        if (i == init) {
            array[i] = value
        }


    }
    for (var r =i+1+deleteIndex; r <array.length; r++) {
        array[r]= array[r+1]
        }

        return array

    }




    var splicedArr = spliceArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16], 6, 0, 'seis')
    console.log(splicedArr)