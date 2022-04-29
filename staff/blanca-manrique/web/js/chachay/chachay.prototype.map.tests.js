// describe('TEST map')

// describe('Case 1')

// var nums = new Chachay(1, 4, 9, 16)
// var res = nums.map(function (value) {
//     return value * 2
// })

// if (res instanceof Array
//     && res.length === nums.length
//     && res.length === 4
//     && res[0] === 2
//     && res[1] === 8
//     && res[2] === 18
//     && res[3] === 32
//     && nums[0] === 1
//     && nums[1] === 4
//     && nums[2] === 9
//     && nums[3] === 16)
//     success('✅ 😉')
// else
//     fail('❌ 🤡')

describe('Case 2')
//TE DEVUELVE EL ELEMENTO, EN QUÉ ÍNDICE ESTÁ Y EL ARRAY ENTERO SOBRE EL QUE ESTÁ ITERANDO map()
var indexes = []
var arrays = []

var nums = new Chachay(1, 2, 3)
var res = nums.map(function (value, index, array) {
    indexes[indexes.length] = index //para ir añadiendo indexes uno después de otro, es decir, voy a ir llenando indexes que después van a meterse dentro del array vacío indexes
    arrays[arrays.length] = array // acumulo los arrays, en este caso es un solo array referenciado n veces (n = length)
    return value
})

if (res instanceof Array
    && res.length === nums.length
    && res.length === 4
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res != nums
    && indexes.length === nums.length
    && arrays[0] === 0
    && arrays[1] === 1
    && arrays[2] === 2
    && arrays.length ===nums.length
    && arrays[0] === nums
    && arrays[1] === nums
    && arrays[2] === nums
    && nums.length === 3
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3)
    success('✅ 😉')
else
    fail('❌ 🤡')

// describe('Case 3')
// var cars = new Chachay('fiat', 'renault', 'peugeot', 'ford', 'opel', 'rimac')
// var toUpperCase = function (string) {
//     return string.toUpperCase()
// }
// var res = cars.map(toUpperCase)

// if (res instanceof Array
//     && res.length === cars.length
//     && res[0] === cars[0].toUpperCase()
//     && res[1] === cars[1].toUpperCase()
//     && res[2] === cars[2].toUpperCase()
//     && res[3] === cars[3].toUpperCase()
//     && res[4] === cars[4].toUpperCase()
//     && res[5] === cars[5].toUpperCase()
//     && cars.length === 6
//     && cars[0] === 'fiat'
//     && cars[1] === 'renault'
//     && cars[2] === 'peugeot'
//     && cars[3] === 'ford'
//     && cars[4] === 'opel'
//     && cars[5] === 'rimac')
//     success('OK')
// else
//     fail('KO')