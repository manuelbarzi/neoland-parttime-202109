console.log('TEST slice')

console.log ('Case 1')

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var arrayPortion = slice(array, 2)
console.log(arrayPortion) // ['camel', 'duck', 'elephant']

if(arrayPortion instanceof Array
    && array.length === 5
    && arrayPortion.length === 3
    && arrayPortion[0] === 'camel'
    && arrayPortion[1] === 'duck'
    && arrayPortion[2] === 'elephant'
)console.log('✅ 😉')
else
console.error('❌ 🤡')


console.log('case 4')

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var arrayPortion = slice(array, -2)
console.log(arrayPortion) // ['duck', 'elephant']

if(arrayPortion instanceof Array
    && array.length === 5
    &&arrayPortion.length == 2
    && arrayPortion[0] === 'duck'
    && arrayPortion[1] === 'elephant'
)
console.log('✅ 😉')
else
console.error('❌ 🤡')

