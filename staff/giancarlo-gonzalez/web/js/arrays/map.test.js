console.log('TEST map')

console.log('case 1')

var cars = ['fiat', 'renault', 'peugeot', 'ford', 'opel', 'rimac']
var toUpperCase = function (string) {
    return string.toUpperCase()
}

var res = map(cars, toUpperCase)

if (res instanceof Array
    && res.length === cars.length
    && res[0] === cars[0].toUpperCase()
    && res[1] === cars[1].toUpperCase()
    && res[2] === cars[2].toUpperCase()
    && res[3] === cars[3].toUpperCase()
    && res[4] === cars[4].toUpperCase()
    && res[5] === cars[5].toUpperCase()
    && cars.length === 6
    && cars[0] === 'fiat'
    && cars[1] === 'renault'
    && cars[2] === 'peugeot'
    && cars[3] === 'ford'
    && cars[4] === 'opel'
    && cars[5] === 'rimac')
    console.log('test ok')
else
    console.error('test ko')

console.log('case 2')

var nums = [1, 4, 9, 16]

var multiplyBy2 = function (num) {
    return num * 2
}

var res = map(nums, multiplyBy2)

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0] * 2
    && res[1] === nums[1] * 2
    && res[2] === nums[2] * 2
    && res[3] === nums[3] * 2
    && nums.length === 4
    && nums[0] === 1
    && nums[1] === 4
    && nums[2] === 9
    && nums[3] === 16)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 3')

var nums = [1, 2, 3]
var indexes = []
var arrays = []

var res = map(nums, function (element, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array

    return element
})

if (res instanceof Array
    && res.length === nums.length
    && res[0] === nums[0]
    && res[1] === nums[1]
    && res[2] === nums[2]
    && res !== nums
    && indexes.length === nums.length
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && arrays.length === nums.length
    && arrays[0] === nums
    && arrays[1] === nums
    && arrays[2] === nums
    && nums.length === 3
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3)
    console.log('test ok')
else
    console.error('test ko')

   /* console.log("Case 3")

    var name = [{firstname: "Rose", lastname: "Tyler"},
                {firstname: "Matt", lastname: "Smith"} , 
                 {firstname: "Emilia", lastname: "Pond"}]
    var res = []
    
    function fullname(name, obj) {

        var robj = {}
        robj[obj.firstname] = obj.lastname 
        return res[robj] 
    }
    map(name, fullname)
    
    if (res.length === numbers.length
        && res[0] === 1
        && res[1] === 2
        && res[2] === 3
        && numbers.length === 3
        && numbers[0] === 1
        && numbers[1] === 4
        && numbers[2] === 9)
        console.log("GUAY")
    else
        console.error("antiguay")
    
        console.log(res)
    console.log(res)*/