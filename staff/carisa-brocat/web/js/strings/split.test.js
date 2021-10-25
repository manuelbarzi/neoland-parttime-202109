console.log('DEMO SPLIT')

//Demo 1
console.log('>Case 1')

var str = 'The quick brown fox jumps over the lazy dog.'
var newArray = split(str, " ")

if(newArray instanceof Array
    && newArray.length === 9
    && newArray[0] === "The"
    && newArray[1] === "quick"
    && newArray[2] === "brown"
    && newArray[3] === "fox"
    && newArray[4] === "jumps"
    && newArray[5] === "over"
    && newArray[6] === "the"
    && newArray[7] === "lazy"
    && newArray[8] === "dog."
    )
console.log('✅ 😉')
else
    console.error('❌ 🤡')


//Demo 2
console.log('>Case 2')

var str = 'dog'
var newArray = split(str, '')

if(newArray instanceof Array
    && newArray.length === 3
    && newArray[0] === "d"
    && newArray[1] === "o"
    && newArray[2] === "g"
    )
console.log('✅ 😉')
else
    console.error('❌ 🤡')

// //Demo 3
// console.log('>Case 3')

// var str = 'The quick brown fox jumps over the lazy dog.'
// var newArray = split(str, '')


// //Demo 4
// console.log('>Case 4')

// var str = 'Hello World. How are you doing?'
// var newArray = split(str,' ', 3)
