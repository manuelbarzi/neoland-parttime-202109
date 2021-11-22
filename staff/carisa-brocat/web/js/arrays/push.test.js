describe('Push Test')

describe('Case 1')

var animals = ['pigs', 'goats', 'sheep']
var count = push(animals, 'cows')

if(typeof count === 'number'
&& count === 4
&& animals.length === 4
&& animals[0] === 'pigs'
&& animals[1] === 'goats'
&& animals[2] === 'sheep'
&& animals[3] === 'cows'
)
success('test ok')
else
fail('test ko')


describe('Case 2')

var animals = ['pigs', 'goats', 'sheep']
var count = push(animals, 'chickens', 'cats', 'dogs')

if(typeof count === 'number'
&& count === 6
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

