console.log('TEST lastindexOf')

console.log('case 1')

var array = ['ant', 'bison', 'camel', 'duck', 'camel', 'bison']
var index = lastIndexOf(array, 'camel')

if (typeof index === 'number'
    && index === 4)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')


console.log('case 2')

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var index = lastIndexOf(array, 3)

if (typeof index === 'number'
    && index === 13)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log('case 3')

var array = ['un', 'nuevo', 'caso']
var index = lastIndexOf(array, 'cruel')

if (typeof index === 'number'
    && index === -1)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')