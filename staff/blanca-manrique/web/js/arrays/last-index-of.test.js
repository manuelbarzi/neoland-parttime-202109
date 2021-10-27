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

console.log('case 4')

var array = [2, 6, 2, 5, 6, 1, 2, 5]
var index = lastIndexOf(array, 2, -1)

if (typeof index === 'number'
    && index === 6)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log('case 5')

var array = [2, 6, 2, 5, 6, 1, 2, 5]
var index = lastIndexOf(array, 2, -3)

if (typeof index === 'number'
    && index === 2)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log('case 6') //Este caso ya está incluido porque si index es mayor o igual que la longitud del array, nos sacará por pantalla el último elemento dentro del array que coincida con element. 

var array = [2, 6, 2, 5, 6, 1, 2, 5]
var index = lastIndexOf(array, 2, 11)

if (typeof index === 'number'
    && index === 6)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')