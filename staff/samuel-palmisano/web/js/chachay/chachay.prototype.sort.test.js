describe('TEST sort')

// ______________________________________________________________________________

var chars = new Chachay('c', 'b', 'd', 'a', 'f', 'e')
var res = chars.sort()

if (res instanceof Chachay
    && res === chars
    && chars.length === 6
    && chars[0] === 'a'
    && chars[1] === 'b'
    && chars[2] === 'c'
    && chars[3] === 'd'
    && chars[4] === 'e'
    && chars[5] === 'f')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var nums = new Chachay(3, 10, 1, 0, 20, 2, 200)
var res = nums.sort()

if (res instanceof Chachay
    && res === nums
    && nums.length === 7
    && nums[0] === 0
    && nums[1] === 1
    && nums[2] === 10
    && nums[3] === 2
    && nums[4] === 20
    && nums[5] === 200
    && nums[6] === 3)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________

var animals = new Chachay('dog', 'cat', 'kangoroo', 'elephant', 'lion', 'zebra', 'hypo', 'coco')
var res = animals.sort()

if (res instanceof Chachay
    && res === animals
    && animals.length === 8
    && animals[0] === 'cat'
    && animals[1] === 'coco'
    && animals[2] === 'dog'
    && animals[3] === 'elephant'
    && animals[4] === 'hypo'
    && animals[5] === 'kangoroo'
    && animals[6] === 'lion'
    && animals[7] === 'zebra')
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________

var nums = new Chachay(3, 10, 1, 0, 20, 2, 200)
var res = nums.sort(function (a, b) {
    return a - b
})

if (res instanceof Chachay
    && res === nums
    && nums.length === 7
    && nums[0] === 0
    && nums[1] === 1
    && nums[2] === 2
    && nums[3] === 3
    && nums[4] === 10
    && nums[5] === 20
    && nums[6] === 200)
    success('test 4 ok')
else
    fail('test 4 failed')

// ______________________________________________________________________________

var animals = new Chachay('dog', 'cat', 'kangoroo', 'elephant', 'lion', 'zebra', 'hypo', 'coco')
var res = animals.sort(function (a, b) {
    if (a < b) return -1

    if (a === b) return 0

    if (a > b) return 1
})

if (res instanceof Chachay
    && res === animals
    && animals.length === 8
    && animals[0] === 'cat'
    && animals[1] === 'coco'
    && animals[2] === 'dog'
    && animals[3] === 'elephant'
    && animals[4] === 'hypo'
    && animals[5] === 'kangoroo'
    && animals[6] === 'lion'
    && animals[7] === 'zebra')
    success('test 5 ok')
else
    fail('test 5 failed')

// ______________________________________________________________________________

var animals = new Chachay('dog', 'cat', 'kangoroo', 'elephant', 'lion', 'zebra', 'hypo', 'coco')
var res = animals.sort(function (a, b) {
    if (a < b) return 1

    if (a === b) return 0

    if (a > b) return -1
})

if (res instanceof Chachay
    && res === animals
    && animals.length === 8
    && animals[0] === 'zebra'
    && animals[1] === 'lion'
    && animals[2] === 'kangoroo'
    && animals[3] === 'hypo'
    && animals[4] === 'elephant'
    && animals[5] === 'dog'
    && animals[6] === 'coco'
    && animals[7] === 'cat')
    success('test 6 ok')
else
    fail('test 6 failed')