console.log('DEMO includes')

// DEMO 1

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var result = includes(array, 0)
console.log(result) // false    

// DEMO 1

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = includes(array, 5)
console.log(result) // true   

// DEMO 3
var array = ['hola', 'mundo']
var result = includes(array, 'hola')
console.log(result) // true

// DEMO 4
var array = ["a","b","c","d","","e", "" ]
var result = includes(array, "f")
console.log(result) // false