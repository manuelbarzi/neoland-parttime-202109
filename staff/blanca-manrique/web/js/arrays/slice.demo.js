console.log('DEMO slice')

// DEMO 1

var array = [1, 2, 3, 4, 5]
var newArray = slice(array, 0, 3)
console.log(newArray) //

// DEMO 2

var array = ['a', 'b', 'c']
var newArray = slice(array, 0, -1)
console.log(newArray) // 

// DEMO 3

var array = ['a', 1, true, null, undefined, { name: 'Peter' }, [1, 2, 3]]
var newArray = slice(array, -3, -1 )
console.log(newArray) // 