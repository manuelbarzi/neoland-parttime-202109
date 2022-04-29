console.log('DEMO includes')

// DEMO 1
var string = "hola mundo";
var result = includes(string, 'hola')
console.log(result);
// expected output: true

// DEMO 2
var string = "como comemos comino";
var result = includes(string, 'com')
console.log(result);
// expected output: true

// DEMO 3
var string = "includes";
var result = includes(string, 'a')
console.log(result);
// expected output: false