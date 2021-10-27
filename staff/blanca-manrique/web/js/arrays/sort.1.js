// swap = intercambio de elementos

var count = 0

function sort (array){
    var j =1
    debugger
    for(var i=0; i< array.length; i++){
        var element = array[i]
        var nextelement = array[j]

        if(element + '' > nextelement + ''){ // hago el swap
            array[j] = element
            array[i] = nextelement
            i = -1
            j = 1
        } else if( j < array.length -1){
            temp = element
            j++
        }

        count++
    }
    return array
}