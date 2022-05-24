describe('TEST concat')


// ______________________________________________________________________________


var string = 'ho'
var string2 = 'la'

var res = concat(string, string2)

if (typeof res === 'string'
    && res.length === string.length + string2.length
    && res === string + string2) // hola
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________


var string = 'hola'
var string2 = ' '
var string3 = 'mundo'

var res = concat(string, string2, string3)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length
    && res === string + string2 + string3) // hola mundo
    success('test 2 ok')
else
    fail('test 2 failed')


// ______________________________________________________________________________


var string = 'adios'
var string2 = ' '
var string3 = 'mundo'
var string4 = 'cruel'

var res = concat(string, string2, string3, string2, string4)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length + string2.length + string4.length
    && res === string + string2 + string3 + string2 + string4) // adios mundo cruel
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________


var string = 'banana'
var string2 = ' '
var string3 = 'pera'
var string4 = 'naranja'
var string5 = 'melon'

var res = concat(string, string2, string3, string2, string4, string2, string5)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length + string2.length + string4.length + string2.length + string5.length
    && res === string + string2 + string3 + string2 + string4 + string2 + string5) // banana pera naranja melon
    success('test 4 ok')
else
    fail('test 4 failed')