//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array. Si se llama a pop() en un array vacío, devuelve undefined.

describe('Pop')

describe('Case 1')
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var res = pop(plants)

if (typeof res === 'string'
    && res === 'tomato'
    && plants.length === 4
    && plants[0] === 'broccoli'
    && plants[1] === 'cauliflower'
    && plants[2] === 'cabbage'
    && plants[3] === 'kale')
    success('test ok')
else
    fail('test ko')

describe('Case 2')
var plants = []

var res = pop(plants)

if (typeof res === 'undefined'
    && plants.length === 0)
    success('test ok')
else
    fail('test ko')