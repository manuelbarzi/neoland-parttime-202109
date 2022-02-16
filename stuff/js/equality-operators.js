console.log('> equality operators')

var a = 1
var b = 2
console.log(a === b)

var a = 1
var b = 1
console.log(a === b)

var a = '1'
var b = 1
console.log(a === b)

var a = '1'
var b = 1
console.log(a == b)

var a = true
var b = 1
console.log(a == b)

var a = true
var b = '1'
console.log(a == b)
console.log(b == a)

var a = true
var b = ' '
console.log(a == b)
console.log(b == a)

var a = true
var b = '2'
console.log(a == b)
console.log(b == a)

var a = false
var b = ' '
console.log(a == b)
console.log(b == a)

var a = false
var b = '2'
console.log(a == b)
console.log(b == a)

var a = ''
if (a) console.log('if')
else console.log('else')

var a = ' '
if (a) console.log('if')
else console.log('else')

var a = ' '
if (a == false) console.log('if')
else console.log('else')

var a = '  '
if (a == false) console.log('if')
else console.log('else')

var a = '  \t'
if (a == false) console.log('if')
else console.log('else')

var a = '  \t\n'
if (a == false) console.log('if')
else console.log('else')

var a = '  \t\n'
if (false == a) console.log('if')
else console.log('else')

var a = 1
var b = 2
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)

console.log('> any to string')

console.log(1 + '')
console.log((1).toString())
console.log((true).toString())
console.log(null + '')
console.log(undefined + '')