console.log('> typeof')

var a = 1
console.log(typeof a)

var a = 'hola mundo'
console.log(typeof a)

var a = true
console.log(typeof a)

var a = {}
console.log(typeof a)

var a = []
console.log(typeof a)

var a = function() {}
console.log(typeof a)

var a = null
console.log(typeof a)

var a = undefined
console.log(typeof a)

console.log('> instanceof')

var a = 1
console.log(a instanceof String)

var a = 'hola mundo'
console.log(a instanceof String)

a.name = 'Peter'
console.dir(a)

var a = new String('hola mundo')
console.log(a instanceof String)

a.name = 'Peter'
console.dir(a)

console.log(a instanceof Object)

a[0] = 'H'
console.dir(a)

var a = new Date
console.log(a instanceof Date)
console.log(a instanceof Array)
console.log(a instanceof Function)
console.log(a instanceof Object)

var a = [1, 2, 3]
console.log(a instanceof Date)
console.log(a instanceof Array)
console.log(a instanceof Function)
console.log(a instanceof Object)

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

console.log('> binary logical operators')

var a = true
var b = true
console.log(a && b) // 1 x 1 => 1
console.log(a || b) // 1 + 1 => 1 (true)

var a = true
var b = false
console.log(a && b) // 1 x 0 => 0
console.log(a || b) // 1 + 0 => 1

var a = function() {
    console.log('a')

    return true
}

var b = function() {
    console.log('b')

    return true
}

console.log(a() && b()) // 1 x 1 => 1
console.log(b() && a()) // 1 x 1 => 1
console.log(a() || b()) // 1 + 1 => 1
console.log(b() || a()) // 1 + 1 => 1

var a = function() {
    console.log('a')

    return false
}

var b = function() {
    console.log('b')

    return true
}

console.log(a() && b()) // 0 x 1 => 0
console.log(b() && a()) // 1 x 0 => 0
console.log(a() || b()) // 0 + 1 => 1
console.log(b() || a()) // 1 + 0 => 1
