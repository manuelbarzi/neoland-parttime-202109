console.log('DEMO slice')

// DEMO 1

var output = slice('The quick brown fox jumps over the lazy dog.', 31)
console.log(output) // "the lazy dog"

// DEMO 2

var output = slice('The quick brown fox jumps over the lazy dog.', 4, 19)
console.log(output) // "quick brown fox"

// DEMO 3

var output = slice('The quick brown fox jumps over the lazy dog.', -4)
console.log(output) // "dog"