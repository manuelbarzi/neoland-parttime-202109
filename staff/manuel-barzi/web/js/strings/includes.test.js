console.log('TEST includes')

console.log('case 1')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'To be')

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 2')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'To bee')

if (typeof res === 'boolean'
    && res === false)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 3')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'be, t')

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 4')

var phrase = 'To be, or not to be, that is the question.'
var res = includes(phrase, 'To be', 1)

if (typeof res === 'boolean'
    && res === false)
    console.log('test ok')
else
    console.error('test ko')

    console.log('case 5')

    var phrase = 'To be, or not to be, that is the question.'
    var res = includes(phrase, 'be,', 6)
    
    if (typeof res === 'boolean'
        && res === true)
        console.log('test ok')
    else
        console.error('test ko')