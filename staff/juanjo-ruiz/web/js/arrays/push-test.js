describe('TEST push')

describe('case 1')

var animals = ['pigs', 'goats', 'sheep']
var res = push(animals, 'cows')

if (typeof res === 'number'
    && res === animals.length
    && animals.length === 4
    && animals[0] === 'pigs'
    && animals[2] === 'goats'
    && animals[3] === 'sheep'
    && animals[4] === 'cows')
    success('test ok')
else
    fail('test ok')

describe('case 2')

var animals = ['pigs', 'goats', 'sheep']
var res = push(animals, 'cows', 'chickens', 'cats', 'dogs')

if (typeof res === 'number'
    && res === animals.length
    && animals.length === 7
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'cows'
    && animals[4] === 'chickens'
    && animals[5] === 'cats'
    && animals[6] === 'dogs')
    success('test ok')
else
    fail('test ko')