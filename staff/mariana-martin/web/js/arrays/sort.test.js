console.log('TEST sort ARRAY')

console.log("Case 1")

var array = [40, 1, 5, 200];
var sorted = sort(array);

if (
  sorted instanceof Array &&
  sorted.length === 4 &&
  sorted[0] === 1 &&
  sorted[1] === 5 &&
  sorted[2] === 40 &&
  sorted[3] === 200 && 
  sorted.length === array.length
)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

    console.log("Case 2")

var array = ['c', 'd', 'b', 'a'];
var sorted = sort(array);

if (
  sorted instanceof Array &&
  sorted.length === 4 &&
  sorted[0] === 'a' &&
  sorted[1] === 'b' &&
  sorted[2] === 'c' &&
  sorted[3] === 'd' &&
  sorted.length === array.length
)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')
