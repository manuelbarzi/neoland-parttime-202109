console.log('TEST Find')

console.log('CASO 1')

var array = ['perro', 'mapurite', 'lucas', 'yoana', 'julio', 'paralelepipedo', 'paella']
var pew = function(word){
    var res = word.length > 5
    return res
}

var found = find(array, pew)
    if(
        found === 'mapurite'
    ) {
        console.log('TEST Okay')
    }
    else {
        console.error('🖕🏼')
    }

console.log(found)


console.log('CASO 2')

var array = ['oro', 'reno', 'loro', 'paella']
var pew = function(word){
    var res = word.length > 5
    return res
}

var found = find(array, pew)
    if(
        found === 'paella'
    ) {
        console.log('TEST Okay')
    }
    else {
        console.error('🖕🏼')
    }

console.log(found)