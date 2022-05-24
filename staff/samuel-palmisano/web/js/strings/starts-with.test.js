describe('TEST starts-with')


var texto = 'Esta noche estamos de fiesta'

// ______________________________________________________________________________


var res = startsWith(texto, 'Esta')

if (typeof res === 'boolean'
    && res === true)
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________


var res = startsWith(texto, 'noche')

if (typeof res === 'boolean'
    && res === false)
    success('test 2 ok')
else
    fail('test 2 failed')
// ______________________________________________________________________________

var res = startsWith(texto, 'esta', 11)

if (typeof res === 'boolean'
    && res === true)
    success('test 3 ok')
else
    fail('test 3 failed')

