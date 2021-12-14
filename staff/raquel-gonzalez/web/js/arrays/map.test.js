console.log("Test map")

console.log("Case 1")

var numbers=[1,5,10,15] 
var res = []

function double(num, index) {
    return res[index]= num*2
}
map(numbers, double)

if (res.length === numbers.length
&& res[0] === 2
&& res[1] === 10
&& res[2] === 20
&& res[3] === 30
&& numbers.length === 4
&& numbers[0] === 1
&& numbers[1] === 5
&& numbers[2] === 10
&& numbers[3] === 15)
console.log("GUAY")
else
console.error("antiguay")
console.log(res)

console.log ("case 2")

var numbers = [1, 4, 9];
var res = []

function double(num, index) {
    return res[index]= num*2
}