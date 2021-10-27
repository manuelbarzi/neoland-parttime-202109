console.log('TEST map')

console.log('case 1')

var array = [1, 2, 3, 4, 5]
var fun = function(element){
 var res = element*2
    return res
}
var maped = map(array,fun)
if (maped.length === array.length
    && maped[0] === 2
    && maped[1] === 4
    && maped[2] === 6
    && maped[3] === 8
    && maped[4] === 10
    && array.length === 5
    && array[0] === 1
    && array[1] === 2
    && array[2] === 3
    && array[3] === 4
    && array[4] === 5
    ){
    console.log('✅ 😉')}
else
    console.error('❌ 🤡')
console.log(maped)


console.log('case 2')

var array = ['perro','gato' , 'zebra', 'rata', 'mapurite']
var fun = function(element){
 var res = element.toUpperCase()
    return res
}
var maped = map(array,fun)
if (maped.length === array.length
    && maped[0] === 'PERRO'
    && maped[1] === 'GATO'
    && maped[2] === 'ZEBRA'
    && maped[3] === 'RATA'
    && maped[4] === 'MAPURITE'
    && array.length === 5
    && array[0] === 'perro'
    && array[1] === 'gato'
    && array[2] === 'zebra'
    && array[3] === 'rata'
    && array[4] === 'mapurite'
    ){
    console.log('✅ 😉')}
else
    console.error('❌ 🤡')

console.log(maped)


