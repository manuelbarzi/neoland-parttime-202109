console.log('TEST map ARRAY')

console.log('case 1')

var array1 = [1, 4, 9, 16];
var res = map(array1, function (a) { return a * 2 })

if (res instanceof Array
    && res.length === array1.length
    && res.length === 4
    && res[0] === 2
    && res[1] === 8
    && res[2] === 18
    && res[3] === 32
    && array1[0] === 1
    && array1[1] === 4
    && array1[2] === 9
    && array1[3] === 16
)
    console.log('test ok :)')
else
    console.error('test ko :(')

console.log('case 2')

var array1 = [1, 4, 9, 16];
var res = map(array1, function (a) { return Math.sqrt(a) })

if (res instanceof Array
    && res.length === array1.length
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && array1[0] === 1
    && array1[1] === 4
    && array1[2] === 9
    && array1[3] === 16
)
    console.log('test ok :)')
else
    console.error('test ko :(')

console.log('case 3')

var array1 = [1, 4, 9, 16];
var res = map(array1, function (a) { return a + ' manzanas' })

if (res instanceof Array
    && res.length === array1.length
    && res.length === 4
    && res[0] === '1 manzanas'
    && res[1] === '4 manzanas'
    && res[2] === '9 manzanas'
    && res[3] === '16 manzanas'
    && array1[0] === 1
    && array1[1] === 4
    && array1[2] === 9
    && array1[3] === 16
)
    console.log('test ok :)')
else
    console.error('test ko :(')

console.log('case 4')

var array1 = [1, 4, 9, 16];
var res = map(array1, function (a) { return [a, a * 2] })

if (res instanceof Array
    && res.length === array1.length
    && res.length === 4
    && res[0] === [1, 2]
    && res[1] === [4, 8]
    && res[2] === [9, 18]
    && res[3] === [16, 32]
    && array1[0] === 1
    && array1[1] === 4
    && array1[2] === 9
    && array1[3] === 16
)
    console.log('test ok :)')
else
    console.error('test ko :(')

    console.log('case 5')

    function multiply (elemento, indice, array) {
        
       // console.log(array[indice])
        console.log(elemento)

        return  elemento * 2
    }

    var array1 = [1, 4, 9, 16];
    var res = map(array1, multiply)
    
    if (res instanceof Array
        && res.length === array1.length
        && res.length === 4
        && res[0] === [1, 2]
        && res[1] === [4, 8]
        && res[2] === [9, 18]
        && res[3] === [16, 32]
        && array1[0] === 1
        && array1[1] === 4
        && array1[2] === 9
        && array1[3] === 16
    )
        console.log('test ok :)')
    else
        console.error('test ko :(')