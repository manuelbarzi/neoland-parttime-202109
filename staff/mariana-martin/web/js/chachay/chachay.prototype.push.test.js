describe('>>>> push <<<<')

describe('case 1')

var animals = ['pigs', 'goats', 'sheep']
var res = animals.push('cows')

if (typeof res === 'number'
    && res === 4
    && animals.length === 4
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'cows'
   )
    success('test ok')
else
    fail('test ko')

    describe('case 2')

var animals = ['pigs', 'goats', 'sheep']
var res = animals.push('chickens', 'cats', 'dogs')

if (typeof res === 'number'
    && res === 6
    && animals.length === 6
    && animals[0] === 'pigs'
    && animals[1] === 'goats'
    && animals[2] === 'sheep'
    && animals[3] === 'chickens'
    && animals[4] === 'cats'
    && animals[5] === 'dogs'
   )
    success('test ok')
else
    fail('test ko')

