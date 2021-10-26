console.log('TEST fill')

console.log('case 1')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, 2, 4)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 0
    && nums[3] === 0
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 2')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, 2, 10)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 0
    && nums[3] === 0
    && nums[4] === 0
    && nums[5] === 0
    && nums[6] === 0)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 3')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, -6, 4)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 0
    && nums[2] === 0
    && nums[3] === 0
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 4')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, -10, 4)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[-3] === undefined
    && nums[-2] === undefined
    && nums[-1] === undefined
    && nums[0] === 0
    && nums[1] === 0
    && nums[2] === 0
    && nums[3] === 0
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 5')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, 2, -2)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 0
    && nums[3] === 0
    && nums[4] === 0
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 6')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, 2, -10)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 7')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, NaN, NaN)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 8')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, 1, 1)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 9')

var nums = [1, 2, 3, 4, 5, 6, 7]
var res = fill(nums, 0, -6, -3)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res[3] === nums[3]
    && res[4] === nums[4]
    && res[5] === nums[5]
    && res[6] === nums[6]
    && nums.length === 7
    && nums[0] === 1
    && nums[1] === 0
    && nums[2] === 0
    && nums[3] === 0
    && nums[4] === 5
    && nums[5] === 6
    && nums[6] === 7)
    console.log('test ok')
else
    console.error('test ko')