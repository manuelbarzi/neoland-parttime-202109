console.log('TEST find')

console.log('Case 1')

var indexes =[]
var arrays =[]

var  array= [5, 12, 8, 130, 44]
var res = find(array, function(element, index, array){
    indexes[indexes.length] = index
    arrays[arrays.length] = array
        return element >10
})

if(typeof res === 'number'
&& array.length === 5
&& array[0] === 5 
&& array[1] === 12 
&& array[2] === 8
&& array[3] === 130 
&& array[4] === 44
&& res > 10
&& indexes.length=== 2
&& indexes[0] === 0
&& indexes[1] === 1
&& arrays.length === 2
&& arrays[0] === array
&& arrays[1] === array)
console.log('test ok')
else
    console.error('test ko')

    console.log('Case 2')

var indexes =[]
var arrays =[]

var  array= [5, 1, 3, 0, 4]
var res = find(array, function(element, index, array){
    indexes[indexes.length] = index
    arrays[arrays.length] = array
        return element >10
})

if(typeof res === 'undefined'
&& array.length === 5
&& array[0] === 5 
&& array[1] === 1 
&& array[2] === 3
&& array[3] === 0 
&& array[4] === 4
&& indexes.length=== 5
&& indexes[0] === 0
&& indexes[1] === 1
&& indexes[2] === 2
&& indexes[3] === 3
&& indexes[4] === 4
&& arrays.length === 5
&& arrays[0] === array
&& arrays[1] === array
&& arrays[2] === array
&& arrays[3] === array
&& arrays[4] === array)
console.log('test ok')
else
    console.error('test ko')
