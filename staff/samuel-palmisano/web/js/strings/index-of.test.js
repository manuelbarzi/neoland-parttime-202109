describe('TEST indexOf')

// ______________________________________________________________________________


var res = indexOf('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________


var res = indexOf('hola mundo', 'o')

if (typeof res === 'number'
    && res === 1)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________


var res = indexOf('hola mundo', 'i')

if (typeof res === 'number'
    && res === -1)
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________


var res = indexOf('hola mundo', 'mu')

if (typeof res === 'number'
    && res === 5)
    success('test 4 ok')
else
    fail('test 4 failed')

// ______________________________________________________________________________


var res = indexOf('hola mundo', 'ola')

if (typeof res === 'number'
    && res === 1)
    success('test 5 ok')
else
    fail('test 5 failed')

// ______________________________________________________________________________


var res = indexOf('hola mundo', 'olam')

if (typeof res === 'number'
    && res === -1)
    success('test 6 ok')
else
    fail('test 6 failed')

// ______________________________________________________________________________


var res = indexOf('hola mundo holamundo', 'olam')

if (typeof res === 'number'
    && res === 12)
    success('test 7 ok')
else
    fail('test 7 failed')

// ______________________________________________________________________________


var res = indexOf('holamundo holamundo', 'olam', 5)

if (typeof res === 'number'
    && res === 11)
    success('test 8 ok')
else
    fail('test 8 failed')