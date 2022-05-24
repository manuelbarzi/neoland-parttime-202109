describe('TEST push')

// ______________________________________________________________________________

var animals = ['pigs', 'goats', 'sheep']
var res = push(animals, 'cows')

if (typeof res === 'number'
    && res === 4
    && animals.length === 4
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'cows')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var animals = ['pigs', 'goats', 'sheep']
var res = push(animals, 'cows', 'chickens', 'cats', 'dogs', 'mouses')

if (animals instanceof Array
    && animals.length === 8
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'cows'
    && animals[4] === 'chickens'
    && animals[5] === 'cats'
    && animals[6] === 'dogs'
    && animals[7] === 'mouses')
    success('test 2 ok')
else
    fail('test 2 failed')