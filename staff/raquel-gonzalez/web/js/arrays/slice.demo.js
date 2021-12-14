console.log('DEMO slice')

// DEMO 1

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(array, 2)
console.log(arrayPortion) // ['camel', 'duck', 'elephant']


//DEMO 2

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(array, 2, 4)
console.log(arrayPortion) // ['camel', 'duck']

//DEMO 3

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(array, 1, 5)
console.log(arrayPortion) // ['bison' 'camel', 'duck', 'elephant']


//DEMO 4

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(array, -2)
console.log(arrayPortion) // ['duck', 'elephant']


//DEMO 5

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(array, 2, -1)
console.log(arrayPortion) // ['camel', 'duck']