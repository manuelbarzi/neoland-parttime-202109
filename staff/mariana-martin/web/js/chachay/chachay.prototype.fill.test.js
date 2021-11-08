describe('>>>> fill <<<<')

describe('case 1')

var nums = new Chachay(1, 2, 3, 4);
var res = nums.fill(6)


if ( res instanceof Chachay
    && res.length === 4
    && res[0] === 6
    && res[1] === 6
    && res[2] === 6
    && res[3] === 6
    && numbers.length === 4
    && numbers[0] === 6
    && numbers[1] === 6
    && numbers[2] === 6 
    && numbers[3] === 6)

    success('test ok')
    else
        fail('test ko')

    describe('case 2')

var nums = new Chachay(1, 2, 3, 4);
var res = nums.fill(5, 1)


if ( res instanceof Chachay
    && res.length === 4
    && res[0] === 1
    && res[1] === 5
    && res[2] === 5
    && res[3] === 5
    && nums.length === 4
    && nums[0] === 1
    && nums[1] === 5
    && nums[2] === 5 
    && nums[3] === 5)

    success('test ok')
    else
        fail('test ko')


    describe('case 3')

var nums = new Chachay(1, 2, 3, 4);
var res = nums.fill(0, 2, 4)


if ( res instanceof Chachay
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 0
    && res[3] === 0
    && nums.length === 4
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 0 
    && nums[3] === 0)

    success('test ok')
    else
        fail('test ko')


    describe('case 4')

var nums = new Chachay(1, 2, 3);
var res = nums.fill(4, -3, -2)


if ( res instanceof Chachay
    && res.length === 3
    && res[0] === 4
    && res[1] === 2
    && res[2] === 3
    && nums.length === 3
    && nums[0] === 4
    && nums[1] === 2
    && nums[2] === 3)
    success('test ok')
    else
        fail('test ko')


   describe('case 5')

var nums = new Chachay(1, 2, 3);
var res = nums.fill(4, 'h', 'k')


if ( res instanceof Array
    && res.length === 3
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && nums.length === 3
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3)
    success('test ok')
    else
        fail('test ko')