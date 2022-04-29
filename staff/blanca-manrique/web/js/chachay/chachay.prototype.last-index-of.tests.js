describe('TEST lastindexOf')

describe('case 1')

var animals = new Chachay('ant', 'bison', 'camel', 'duck', 'camel', 'bison')
var index = animals.lastIndexOf('camel')

if (typeof index === 'number'
    && index === 4)
    success('✅ 😉')
else
    fail('❌ 🤡')


describe('case 2')

var nums = new Chachay(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
var index = nums.lastIndexOf(3)

if (typeof index === 'number'
    && index === 13)
    success('✅ 😉')
else
    fail('❌ 🤡')

describe('case 3')

var words = new Chachay ('un', 'nuevo', 'caso')
var index = words.lastIndexOf('cruel')

if (typeof index === 'number'
    && index === -1)
    success('✅ 😉')
else
    fail('❌ 🤡')

describe('case 4')

var nums = new Chachay(2, 6, 2, 5, 6, 1, 2, 5)
var index = nums.lastIndexOf(2, -1)

if (typeof index === 'number'
    && index === 6)
    success('✅ 😉')
else
    fail('❌ 🤡')

describe('case 5')

var nums = new Chachay(2, 6, 2, 5, 6, 1, 2, 5)
var index = nums.lastIndexOf(2, -3)

if (typeof index === 'number'
    && index === 2)
    success('✅ 😉')
else
    fail('❌ 🤡')

describe('case 6') //Este caso ya está incluido porque si index es mayor o igual que la longitud del array, nos sacará por pantalla el último elemento dentro del array que coincida con element. 

var nums = new Chachay(2, 6, 2, 5, 6, 1, 2, 5)
var index = nums.lastIndexOf(2, 11)

if (typeof index === 'number'
    && index === 6)
    success('✅ 😉')
else
    fail('❌ 🤡')