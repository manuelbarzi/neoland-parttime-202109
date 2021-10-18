console.log('DEMO splice')

// DEMO 1
console.log('> Demo 1')

var array = ['Jan', 'March', 'April', 'June']
var item1 = 'Feb'
var start = 1
var deleteCount = 0
var deleteElements = splice(array, start, deleteCount, item1)
console.log(deleteElements) // []
console.log(array) // ['Jan', 'Feb', 'March', 'April', 'June']

// DEMO2

console.log('> Demo 2')

var array = ['Jan', 'March', 'April', 'Feb']
var item1 = 'March'
var start = 1
var deleteCount = 2
var deleteElements = splice(array, start, deleteCount, item1)
console.log(deleteElements) // ['March', 'April']
console.log(array) // ['Jan', 'March', 'Feb' ]

// DEMO3

console.log('> Demo 3')

var array = ['angel', 'clown', 'mandarin', 'sturgeon']
var item1 = 'drum'
var item2 = 'guitar'
var start = 3
var deleteCount = 2
var deleteElements = splice(array, start, deleteCount, item1, item2)
console.log(deleteElements) // ["sturgeon"]
console.log(array) // ["angel", "clown", "mandarin", "drum", "guitar"]

