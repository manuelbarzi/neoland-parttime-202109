console.log("TEST sort")

console.log("case 1")
var chars = ['c', 'a', 'd', 'b', 'f', 'e']
var res = sort(chars)

if (res instanceof Array
    && res.length === chars.length
    && res[0] === chars[0]
    && res[1] === chars[1]
    && res[2] === chars[2]
    && res[3] === chars[3]
    && res[4] === chars[4]
    && res[5] === chars[5]
    && chars.length === 6
    && chars[0] === 'a'
    && chars[1] === 'b'
    && chars[2] === 'c'
    && chars[3] === 'd'
    && chars[4] === 'e'
    && chars[5] === 'f') 
    console.log('✅ 😉')
else 
console.error('❌ 🤡')