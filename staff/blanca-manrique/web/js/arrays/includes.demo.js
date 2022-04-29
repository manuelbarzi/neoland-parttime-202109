console.log('DEMO includes')

// DEMO 1
var array = ['cat', 'dog', 'bat'];
var result = includes(array, 'at')
console.log(result);
// expected output: false

// DEMO 2
var array = ['cat', 'dog', 'bat'];
var result = includes(array, 'cat')
console.log(result);
// expected output: true

// DEMO 3
var array = [1, 2, 3];
var result = includes(array, (2))
console.log(result);
// expected output: true
