console.log('DEMO slice')

// DEMO 1

var string = 'The quick brown fox jumps over the lazy dog.'
var stringPortion = slice(string, 31)
console.log(stringPortion) // "the lazy dog."


//DEMO 2

var stringPortion = slice(string, 4, 19)
console.log(stringPortion) // "quick brown fox"

//DEMO 3

var stringPortion = slice(string, -4)
console.log(stringPortion) // "dog."


//DEMO 4

var stringPortion = slice(string, -9, -5)
console.log(stringPortion) // "lazy"


