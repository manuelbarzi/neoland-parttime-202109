describe('>>>> pop <<<<')

describe('case 1')

var plants = new Chachay ('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')
var res = plants.pop()

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

describe('case 2')

var nums = new Chachay (1, 2, 3, 4, 5)
var res = nums.pop()

if (typeof res === 'number'
    && res === 5
    && nums.length === 4
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4)
    success('test ok')
else
    fail('test ko')