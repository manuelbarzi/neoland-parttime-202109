console.log('DEMO lastIndexOf')

// DEMO 1

var array = ['ant', 'bison', 'camel', 'duck', 'camel', 'bison']
var index = lastIndexOf(array, 'camel')
console.log(index) // 4

// DEMO 2

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var index = lastIndexOf(array, 3)
console.log(index) // 13