describe('TEST slice')

// ______________________________________________________________________________

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, 31)

if (typeof res === 'string'
    && res === 'the lazy dog.')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, 4, 19)

if (typeof res === 'string'
    && res === 'quick brown fox')
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________)

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -4)

if (typeof res === 'string'
    && res === 'dog.')
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -9, -5)

if (typeof res === 'string'
    && res === 'lazy')
    success('test 4 ok')
else
    fail('test 4 failed')