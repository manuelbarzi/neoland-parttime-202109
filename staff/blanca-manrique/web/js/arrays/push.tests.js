describe('TEST push')

describe('Case 1')

var animals = ['pigs', 'goats', 'sheep']
var res = push(animals, 'cows')

if (typeof res === 'number'
    && res === animals.length
    && animals.length === 4
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'cows')
    success('test ok')
else
    fail('test ko')


describe('Case 2') // queremos pasar más de un elemento. Como los elementos que queremos añadir son variables podemos usar arguments, que nos va a permitir pasar todos los argumentos que queremos inyectar al final del array. Arguments recibe en 1er lugar el array animals original y posteriormente los argumentos que quiero inyectar, por eso el bucle FOR lo empiezo en la posición 1, porque la i=0 es el array original y a partir de i=1 empiezan los arguments

var animals = ['pigs', 'goats', 'sheep']
var res = push(animals, 'cows','chickens', 'cats', 'dogs')

if (typeof res === 'number'
    && res === animals.length
    && animals.length === 7
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'cows'
    && animals[4] === 'chickens'
    && animals[5] === 'cats'
    && animals[6] === 'dogs'
    )
    success('test ok')
else
    fail('test ko')

