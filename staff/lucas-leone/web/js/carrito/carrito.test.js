describe('> constructor')

describe('case 1')

var empty = new Carrito

if (empty instanceof Carrito
    && empty.length === 0)
    success('test ok')
else
    fail('test ko')

describe('case 2')

var chars = new Carrito('camiseta', 6, 'sombrero', 15, 'reloj',50)

if (chars instanceof Carrito
    && chars.length === 6
    && chars[0] === 'camiseta'
    && chars[1] ===  6
    && chars[2] === 'sombrero'
    && chars[3] === 15
    && chars[4] === 'reloj'
    && chars[5] === 50)
    success('test ok')
else
    fail('test ko')