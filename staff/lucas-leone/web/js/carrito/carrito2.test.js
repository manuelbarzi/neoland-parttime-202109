describe('> constructor')

describe('case 1')

var empty = new Carrito2

if (empty instanceof Carrito2
    && empty.length === 0)
    success('test ok')
else
    fail('test ko')

describe('case 2')

var chars = new Carrito2('camiseta', 6, 'sombrero', 15, 'reloj',50, true,100)

console.log(chars)


// if (chars instanceof Carrito
//     && chars.length === 6
//     && chars[0] === 'camiseta'
//     && chars[1] ===  6
//     && chars[2] === 'sombrero'
//     && chars[3] === 15
//     && chars[4] === 'reloj'
//     && chars[5] === 50)
//     success('test ok')
// else
//     fail('test ko')