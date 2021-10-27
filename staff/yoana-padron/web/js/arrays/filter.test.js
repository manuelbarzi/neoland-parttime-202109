console.log('TEST Filter')

console.log('CASO 1')

var array = ['perro', 'mapurite', 'lucas', 'yoana', 'julio', 'paralelepipedo', 'paella']
var pew = function(word){
    var res = word.length > 5
    return res
}

var filtered = filter(array, pew)
if(
    filtered instanceof Array
    && filtered[0] === 'mapurite'
    && filtered[1] === 'paralelepipedo'
    && filtered[2] === 'paella'
    && array.length === 7
    && array[0] === 'perro'
    && array[1] === 'mapurite'
    && array[2] === 'lucas'
    && array[3] === 'yoana'
    && array[4] === 'julio'
    && array[5] === 'paralelepipedo'
    && array[6] === 'paella'
) {
    console.log('TEST Okay')
}
else {
    console.error('🖕🏼')
}

console.log(filtered)