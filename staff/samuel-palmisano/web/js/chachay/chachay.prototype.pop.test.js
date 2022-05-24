describe('TEST pop')

// ______________________________________________________________________________

var plants = new Chachay('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')
var res = plants.pop()

if (typeof res === 'string'
    && res === 'tomato'
    && plants.length === 4
    && plants[0] === 'broccoli'
    && plants[1] === 'cauliflower'
    && plants[2] === 'cabbage'
    && plants[3] === 'kale')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var nums = new Chachay(1, 2, 3, 4, 5)
var res = nums.pop()

if (typeof res === 'number'
    && res === 5
    && nums.length === 4
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4)
    success('test 2 ok')
else
    fail('test 2 failed')