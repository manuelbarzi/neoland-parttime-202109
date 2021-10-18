console.log('DEMO slice')

// DEMO 1

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var array1 = slice(array, 2)
console.log(array1) // ['camel', 'duck', 'elephant']

//DEMO 2

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var array1 = slice(array, 2, 4)
console.log(array1) // ['camel', 'duck']

//DEMO 3

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var array1 = slice(array, 1, 5)
console.log(array1) // ['bison', 'camel', 'duck', 'elephant']

//DEMO 4

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var array1 = slice(array, -2)
console.log(array1) // ['duck', 'elephant']

//DEMO 5

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var array1 = slice(array,2,-1)
console.log(array1) // ['camel', 'duck']