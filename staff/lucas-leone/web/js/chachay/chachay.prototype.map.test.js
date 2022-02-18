describe ("map")

describe ("caso 1")


var nums = new Chachay(1, 2, 3, 4)

callb= function(item){
 var res = item * 2
 return res 
}

nums.map(callb)

if (nums.length === 4
    && nums[0] === 2
    && nums[1] === 4
    && nums[2] === 6
    && nums[3] === 8
)
    success('genios')
else
    fail ('fracasados')


