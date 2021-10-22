console.log('TEST indexOf')

console.log('case 1')

var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var index = indexOf(array, 'camel')

//Valor de retorno: El primer índice del elemento en la matriz
if (typeof index === 'number'
    && index === 2)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

// console.log('case 2')

// var array = ['adios', 'mundo', 'cruel']
// var index = indexOf(array, 'cruel')

// if (typeof index === 'number'
//     && index === 2)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

console.log('case 3')

var array = ['adios', 'mundo', 'cruel']
var index = indexOf(array, 'agua')

if (typeof index === 'number'
    && index === -1)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

