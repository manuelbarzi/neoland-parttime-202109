console.log('DEMO reverse')

// DEMO 1

var array = [1, 2, 3, 4, 5]
var reverted = reverse(array)
console.log(reverted) // [5, 4, 3, 2, 1]

// DEMO 2

var array = ['a', 'b', 'c']
var reverted = reverse(array)
console.log(reverted) // ['c', 'b', 'a']

// DEMO 3

var array = ['a', 1, true, null, undefined, { name: 'Peter' }, [1, 2, 3]]
var reverted = reverse(array)
console.log(reverted) // [[1, 2, 3], { name: 'Peter' }, undefined, null, true, 1, 'a']