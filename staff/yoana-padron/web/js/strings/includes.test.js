console.log('TEST includes')


//caso 1 

console.log('Caso 1')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'To be')

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test not ok')

//caso 2

    console.log('Caso 2')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'To bee')

if (typeof res === 'boolean'
    && res === false)
    console.log('test ok')
else
    console.error('test not ok')

//caso 3

    console.log('Caso 3')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'be, t')

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test not ok')

//caso 4

console.log('Caso 4')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'To be', 1)

if (typeof res === 'boolean'
    && res === false)
    console.log('test ok')
else
    console.error('test not ok')


//caso 5

console.log('Caso 5')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'be', 6)

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test not ok')


