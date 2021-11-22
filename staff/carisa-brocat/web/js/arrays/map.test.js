console.log('>Case 1')
 
var array = [1, 4, 9, 16]
var res = map(array, function(value, index, array){
  value*2   
    return value
})

if( res instanceof Array
    && res.length === 4
    && res[0] === 2
    && res[1] === 8
    && res[2] === 18
    && res[3] === 32
    && array.length === 4
    && array[0] === 1
    && array[1] === 4
    && array[2] === 9
    && array[3] === 16

)
console.log('✅ 😉')
else
    console.error('❌ 🤡')


