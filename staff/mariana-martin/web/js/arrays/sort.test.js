console.log('------------------------ TEST sort')

console.log('case 1')

var chars = ['c', 'b', 'd', 'a', 'f', 'e']
var res = sort(chars)

if (res instanceof Array
    && res === chars
    && chars.length === 6
    && chars[0] === 'a'
    && chars[1] === 'b'
    && chars[2] === 'c'
    && chars[3] === 'd'
    && chars[4] === 'e'
    && chars[5] === 'f')
    console.log('test ok')
else
    console.error('test ko')

console.log('case 2')

var nums = [3, 10, 1, 0, 20, 2, 200]
var res = sort(nums)

if (res instanceof Array
    && res === nums
    && nums.length === 7
    && nums[0] === 0
    && nums[1] === 1
    && nums[2] === 10
    && nums[3] === 2
    && nums[4] === 20
    && nums[5] === 200
    && nums[6] === 3)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 3')

var animals = ['dog', 'cat', 'kangoroo', 'elephant', 'lion', 'zebra', 'hypo', 'coco']
var res = sort(animals)

if (res instanceof Array
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
    console.log('test ok')
else
    console.error('test ko')

console.log('case 4')

var nums = [3, 10, 1, 0, 20, 2, 200]
var res = sort(nums, function (a, b) {
    return a - b
})

if (res instanceof Array
    && res === nums
    && nums.length === 7
    && nums[0] === 0
    && nums[1] === 1
    && nums[2] === 2
    && nums[3] === 3
    && nums[4] === 10
    && nums[5] === 20
    && nums[6] === 200)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 5')

var animals = ['dog', 'cat', 'kangoroo', 'elephant', 'lion', 'zebra', 'hypo', 'coco']
var res = sort(animals, function (a, b) {
    if (a < b) return -1

    if (a === b) return 0

    if (a > b) return 1
})

if (res instanceof Array
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
    console.log('test ok')
else
    console.error('test ko')

console.log('case 6')

var animals = ['dog', 'cat', 'kangoroo', 'elephant', 'lion', 'zebra', 'hypo', 'coco']
var res = sort(animals, function (a, b) {
    if (a < b) return 1

    if (a === b) return 0

    if (a > b) return -1
})

if (res instanceof Array
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
    console.log('test ok')
else
    console.error('test ko')