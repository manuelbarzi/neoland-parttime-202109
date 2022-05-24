describe('TEST constructor')

// ______________________________________________________________________________

var empty = new Chachay

if (empty instanceof Chachay
    && empty.length === 0)
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var chars = new Chachay('a', 'b', 'c', 'd', 'e')

if (chars instanceof Chachay
    && chars.length === 5
    && chars[0] === 'a'
    && chars[1] === 'b'
    && chars[2] === 'c'
    && chars[3] === 'd'
    && chars[4] === 'e')
    success('test 2 ok')
else
    fail('test 2 failed')