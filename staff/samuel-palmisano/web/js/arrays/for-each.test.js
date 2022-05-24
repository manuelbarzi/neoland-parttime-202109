describe('TEST forEach')

// ______________________________________________________________________________

var animals = ['zebra', 'lion', 'kangoroo', 'hypo', 'elephant', 'dog', 'coco', 'cat']
var res = []

forEach(animals, function (element, index) {
    res[index] = element
})

if (res.length === animals.length
    && res[0] === animals[0]
    && res[1] === animals[1]
    && res[2] === animals[2]
    && res[3] === animals[3]
    && res[4] === animals[4]
    && res[5] === animals[5]
    && res[6] === animals[6]
    && res[7] === animals[7]
    && animals.length === 8
    && animals[0] === 'zebra'
    && animals[1] === 'lion'
    && animals[2] === 'kangoroo'
    && animals[3] === 'hypo'
    && animals[4] === 'elephant'
    && animals[5] === 'dog'
    && animals[6] === 'coco'
    && animals[7] === 'cat')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var nums = [1, 2, 3, 4, 5, 6]
var res = []

function pow(num, index) {
    return res[index] = num * num
}

forEach(nums, pow)

if (res.length === nums.length
    && res[0] === 1
    && res[1] === 4
    && res[2] === 9
    && res[3] === 16
    && res[4] === 25
    && res[5] === 36
    && nums.length === 6
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4
    && nums[4] === 5
    && nums[5] === 6)
    success('test 2 ok')
else
    fail('test 2 failed')