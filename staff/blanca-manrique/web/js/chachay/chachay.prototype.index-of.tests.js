describe('indexOf')

describe('case 1')

var animals = new Chachay('ant', 'bison', 'camel', 'duck', 'bison')
var res = animals.indexOf('camel')

if (typeof res === 'number'
    && res === 2)
    success('✅ 😉')
else
    fail('❌ 🤡')

console.log('case 2')

var animals = new Chachay('adios', 'mundo', 'cruel')
var res = animals.indexOf('cruel')

if (typeof res === 'number'
    && res === 2)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

// console.log('case 3')

// var array = ['adios', 'mundo', 'cruel']
// var res = indexOf(array, 'agua')

// if (typeof res === 'number'
//     && res === -1)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log('case 4')

// var array = ['adios', 'mundo', 'cruel', 'adios', 'mundo', 'adios']
// var res = indexOf(array, 'mundo', 1)

// if (typeof res === 'number'
//     && res === 1)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log('case 5')

// var array = ['adios', 'mundo', 'cruel', 'adios', 'mundo', 'adios']
// var res = indexOf(array, 'mundo', 7)

// if (typeof res === 'number'
//     && res === -1)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log('case 6')
// //Si el valor es negativo, se toma restando posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental.
// var array = ['adios', 'mundo', 'cruel', 'adios', 'mundo', 'adios']
// var res = indexOf(array, 'mundo', -1)

// if (typeof res === 'number'
//     && res === -1)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log('case 7')
// //Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental.
// var array = ['adios', 'mundo', 'cruel', 'adios', 'mundo', 'adios']
// var res = indexOf(array, 'adios', -2)

// if (typeof res === 'number'
//     && res === 5)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')