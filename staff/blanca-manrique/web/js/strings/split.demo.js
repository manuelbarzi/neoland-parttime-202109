console.log('DEMO split')

// DEMO 1
var string = "adios mundo cruel";
var result = split(string, ' ')
console.log(result);
// expected output: ['adios', 'mundo', 'cruel']

// DEMO 2
var string = "como comemos comino";
var result = split(string, 'com')
console.log(result);
// expected output: ['o ','emos ', 'ino']

// DEMO 3
var string = "split";
var result = includes(string, 'a')
console.log(result);
// expected output: ['split']