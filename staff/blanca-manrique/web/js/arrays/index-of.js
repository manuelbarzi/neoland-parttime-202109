function indexOf(array, element, search) {
    var index = 0
    debugger

    if (search === undefined){
        for (var i = 0; i < array.length; i++) {
            var word = array[i]
            if (word === element) {
                index = i
                return index
            }
        }
        if (index == 0) {
            index = -1
        }
    }else{
        
        if (search > array.length){
            index = -1
        }
        else if(search < array.length && search >0){
            for (var i = search; i < array.length; i++) {
                var word = array[i]
                if (word === element) {
                    index = i
                    return index
                }
            }
            if (index == 0) {
                index = -1
            }
        }
        else if (search < 0){
            for (var i = array.length+search; i<array.length; i++){
                var word = array[i]
                if (word === element) {
                    index = i
                    return index
                }
            }
            if (index == 0) {
                index = -1
            }
        }
    }

    return index
}

