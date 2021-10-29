describe('> constructor')

describe('case 1')

var empty = new Chachay

if (empty instanceof Chachay
    && empty.length === 0)
    success('test ok')
else
    fail('test ko')

describe('case 2')

var chars = new Chachay('a', 'b', 'c', 'd', 'e')

if (chars instanceof Chachay
    && chars.length === 5
    && chars[0] === 'a'
    && chars[1] === 'b'
    && chars[2] === 'c'
    && chars[3] === 'd'
    && chars[4] === 'e')
    success('test ok')
else
    fail('test ko')